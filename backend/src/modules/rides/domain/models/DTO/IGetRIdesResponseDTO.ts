import { IRide } from "../IRide";


export interface IGetRidesResponseDTO {
    customer_id: string;
    rides: IRide[];
}