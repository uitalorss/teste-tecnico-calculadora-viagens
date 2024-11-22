import { inject, injectable } from "tsyringe";
import { IRideRepository } from "../domain/repositories/IRideRepository";
import { IConfirmRideRequestDTO } from "../domain/models/DTO/IConfirmRideRequestDTO";
import { BadRequestError } from "../../../shared/errors/ApiError";
import driversData from "../../../shared/database/drivers.json"

@injectable()
export class CreateRideService {
    constructor(
        @inject("RideRepository")
        private rideRepository: IRideRepository
    ){}

    public async execute({customer_id, origin, destination, distance, duration, driver, value}: IConfirmRideRequestDTO){
        if(origin === destination){
            throw new BadRequestError("Endereços de partida e destino são iguais.")
        }

        const confirmDriver = driversData.find(item => item.id === driver.id && item.name === driver.name);
        if(!confirmDriver){
            throw new BadRequestError("Dados do motorista são inválidos.")
        }

        const isDriverAplliedToRide = confirmDriver!.minimum <= (distance / 1000) ? true : false;

        if(!isDriverAplliedToRide){
            throw new BadRequestError("Motorista indisponível para essa corrida.")
        }

        const user = await this.rideRepository.create({customer_id, destination, distance, driver: driver.id, duration, origin, value})
        return {
            success: true
        }
    }
}