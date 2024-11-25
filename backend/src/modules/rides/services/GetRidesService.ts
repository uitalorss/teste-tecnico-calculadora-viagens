import { inject, injectable } from "tsyringe";
import { RideRepository } from "../infra/repositories/RideRepository";
import { IGetRidesRequestDTO } from "../domain/models/DTO/IGetRIdesRequestDTO";
import driversData from "../../../shared/database/drivers.json"
import { InvalidDriverError, NoRidesFoundError } from "../../../shared/errors/ApiError";

@injectable()
export class GetRidesService {
    constructor(
        @inject("RideRepository")
        private rideRepository: RideRepository
    ){}

    public async execute({customer_id, driver_id}: IGetRidesRequestDTO) {
        if(driver_id){
            const confirmDriver = driversData.find(item => item.id === parseInt(driver_id));
            if(!confirmDriver){
                throw new InvalidDriverError("Dados do motorista são inválidos.")
            }
        }


        const rides = await this.rideRepository.get({customer_id, driver_id});

        if(rides.length < 1){
            throw new NoRidesFoundError("Nenhum registro encontrado.");
        }

        return rides
    }
}