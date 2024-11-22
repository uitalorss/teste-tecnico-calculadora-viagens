import { Repository } from "typeorm";
import { IConfirmRideDTO } from "../../domain/models/DTO/IConfirmRideDTO";
import { IConfirmRideResponseDTO } from "../../domain/models/DTO/IConfirmRideResponseDTO";
import { IGetRidesDTO } from "../../domain/models/DTO/IGetRIdesDTO";
import { IGetRidesResponseDTO } from "../../domain/models/DTO/IGetRIdesResponseDTO";
import { IRideRepository } from "../../domain/repositories/IRideRepository";
import { Ride } from "../entities/Ride";
import { dataSource } from "../../../../shared/database/dataSource";
import { IRide } from "../../domain/models/IRide";


export class RideRepository implements IRideRepository {
    private rideRepository: Repository<Ride>

    constructor(){
        this.rideRepository = dataSource.getRepository(Ride)
    }


    public async create({customer_id, destination, distance, driver, duration, origin, value}: IConfirmRideDTO): Promise<IRide> {
        const ride = this.rideRepository.create({
            customer_id,
            destination,
            distance,
            driver,
            duration,
            origin,
            value
        })

        await this.rideRepository.save(ride);
        return ride;
    }

    get({ }: IGetRidesDTO): Promise<IGetRidesResponseDTO> {
        throw new Error("Method not implemented.");
    }

}