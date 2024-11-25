import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../errors/ApiError";


export const handleErrors = (error: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.statusCode ?? 500;
    const message = error.statusCode ? error.message : "Internal Server Error";
    res.status(statusCode).json({
        error_code: error.error_code,
        error_description: error.message
    })
}