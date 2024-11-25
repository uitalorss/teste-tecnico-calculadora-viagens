import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../errors/ApiError";
import { z } from "zod";


export const validateRequest = (schema: z.AnyZodObject | z.ZodOptional<z.AnyZodObject>) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.parseAsync(req.body);
        next();
    } catch (error) {
        const err = error;
        if (err instanceof z.ZodError) {
            const { issues } = err;
            throw new BadRequestError(issues[0].message);
        }
    }
};