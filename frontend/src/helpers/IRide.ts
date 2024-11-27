

export interface IRide {
    id: number;
    origin: string;
    destination: string;
    date: string;
    distance: number;
    duration: string;
    driver: {
        id: number;
        name: string;
    }
    value: number;
}