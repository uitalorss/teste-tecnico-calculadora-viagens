import { z } from "zod";


export const createRideSchema = z.object({
    customer_id: z.string({required_error: "Campo usuário é obrigatório"}).trim().min(1, "Campo usuário não pode ficar vazio"),
    origin: z.string({required_error: "Campo partida é obrigatório"}).trim().min(5, "Campo partida muito pequeno."),
    destination: z.string({required_error: "Campo destino é obrigatório"}).trim().min(5, "Campo destino muito pequeno."),
    distance: z.number({required_error: "Campo distância é obrigatório"}).int().nonnegative(),
    duration: z.string({required_error: "Campo duração é obrigatório"}),
    driver: z.object({
        id: z.number({required_error: "ID de motorista é obrigatório"}).nonnegative().int(),
        name: z.string({required_error: "Nome de motorista é obrigatório"}).trim().min(5, "Nome muito curto")
    }),
    value: z.number({required_error: "Campo valor é obrigatório"}).nonnegative()
})