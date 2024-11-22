

export interface IConfirmRideRequestDTO {
    customer_id: string;
    origin: string;
    destination: string;
    duration: string;
    distance: number;
    driver: {
        id: number;
        name: string
    }
    value: number;
}