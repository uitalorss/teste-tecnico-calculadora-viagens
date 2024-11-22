import { z } from "zod";


export const estimateSchema = z.object({
    origin: z.string({required_error: "Campo partida é obrigatório"}).trim(),
    destination: z.string({required_error: "Campo destino é obrigatório"}).trim()
})