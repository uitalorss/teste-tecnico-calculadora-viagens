import { Ride } from "../../infra/entities/Ride";
import { IConfirmRideDTO } from "../models/DTO/IConfirmRideDTO";
import { IConfirmRideResponseDTO } from "../models/DTO/IConfirmRideResponseDTO";
import { IGetRidesDTO } from "../models/DTO/IGetRIdesDTO";
import { IGetRidesResponseDTO } from "../models/DTO/IGetRIdesResponseDTO";
import { IRide } from "../models/IRide";


export interface IRideRepository {
    create({}: IConfirmRideDTO): Promise<void>
    get({}: IGetRidesDTO): Promise<Ride[]>;
}