import { inject, injectable } from "tsyringe";
import { RideRepository } from "../infra/repositories/RideRepository";
import { IGetRidesRequestDTO } from "../domain/models/DTO/IGetRIdesRequestDTO";

@injectable()
export class GetRidesService {
    constructor(
        @inject("RideRepository")
        private rideRepository: RideRepository
    ){}

    public async execute({customer_id, driver_id}: IGetRidesRequestDTO) {
        const rides = await this.rideRepository.get({customer_id});

        return rides
    }
}