import { z } from "zod";


export const estimateRideSchema = z.object({
    customer_id: z.string({required_error: "Campo usuário é obrigatório"}).trim().min(1, "Campo usuário não pode ficar vazio"),
    origin: z.string({required_error: "Campo partida é obrigatório"}).trim().min(5, "Campo partida muito pequeno."),
    destination: z.string({required_error: "Campo destino é obrigatório"}).trim().min(5, "Campo destino muito pequeno.")
})