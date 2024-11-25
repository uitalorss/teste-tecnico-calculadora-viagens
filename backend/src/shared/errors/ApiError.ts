export class ApiError extends Error {
    public readonly statusCode: number;
    public readonly error_code: string;
    constructor(error_code: string, message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.error_code = error_code;
    }
}

export class InvalidDataError extends ApiError {
    constructor(message: string) {
        super("INVALID_DATA", message, 400);
    }
}

export class InvalidDriverError extends ApiError {
    constructor(message: string) {
        super("INVALID_DRIVER", message, 400);
    }
}

export class DriverNotFoundError extends ApiError {
    constructor(message: string) {
        super("DRIVER_NOT_FOUND", message, 404);
    }
}

export class NoRidesFoundError extends ApiError {
    constructor(message: string) {
        super("NO_RIDES_FOUND", message, 404);
    }
}   

export class InvalidDistanceError extends ApiError {
    constructor(message: string) {
        super("INVALID_DISTANCE", message, 406);
    }
}