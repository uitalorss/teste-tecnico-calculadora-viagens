

export interface IEstimateRideResponseDTO {
    origin: {
        latitude: number;
        longitude: number;
    };
    destination: {
        latitude: number;
        longitude: number;
    };
    distance: number;
    duration: string;
    options: IOptionDrivers[];
    routeResponse: object;
}

export interface IOptionDrivers {
    id: number;
    name: string;
    description: string;
    vehicle: string;
    review: {
        rating: number;
        comment: string;
    }
    minimum: number;
    fee: number;
    value: string;
}