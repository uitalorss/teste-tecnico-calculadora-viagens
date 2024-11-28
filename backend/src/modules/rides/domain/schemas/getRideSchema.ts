import { z } from "zod";


export const getRideSchema = z.object({
    customer_id: z.string({required_error: "Favor informar o id do usuário."})
})