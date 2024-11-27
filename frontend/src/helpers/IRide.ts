

export interface IRide {
    id: number;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    driver: {
        id: number;
        name: string;
    }
    value: number;
}