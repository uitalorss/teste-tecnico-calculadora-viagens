import { Ride } from "../../infra/entities/Ride";
import { IConfirmRideDTO } from "../models/DTO/IConfirmRideDTO";
import { IGetRidesDTO } from "../models/DTO/IGetRIdesDTO";
import { IRide } from "../models/IRide";


export interface IRideRepository {
    create({}: IConfirmRideDTO): Promise<IRide>
    get({}: IGetRidesDTO): Promise<Ride[]>;
}