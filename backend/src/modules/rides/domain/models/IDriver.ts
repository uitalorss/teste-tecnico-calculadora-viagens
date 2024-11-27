export interface IDriver {
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
}