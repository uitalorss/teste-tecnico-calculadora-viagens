import { IOptionDrivers } from "./IOptionDrivers";


export interface IEstimateRide {
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