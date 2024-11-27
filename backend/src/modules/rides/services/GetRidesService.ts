import { inject, injectable } from "tsyringe";
import { RideRepository } from "../infra/repositories/RideRepository";
import { IGetRidesRequestDTO } from "../domain/models/DTO/IGetRIdesRequestDTO";
import driversData from "../../../shared/database/drivers.json"
import { InvalidDriverError, NoRidesFoundError } from "../../../shared/errors/ApiError";
import { IDriver } from "../domain/models/IDriver";
import { IRide } from "../domain/models/IRide";

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

        const ridesData = await this.rideRepository.get({customer_id, driver_id});

        if(ridesData.length < 1){
            throw new NoRidesFoundError("Nenhum registro encontrado.");
        }



        const ridesfilled = ridesData.map(item => ({
            id: item.id,
            origin: item.origin,
            destination: item.destination,
            distance: item.distance,
            duration: item.duration,
            driver: {
                id: item.driver,
                name: extractDriverName(item)
            },
            value: item.value,
            date: item.created_at
        }))


        const ride = {
            customer_id,
            rides: ridesfilled
        }

        return ride
    }
}

function extractDriverName(ride: IRide){
    const driverToExtract = driversData.find(item => item.id === ride.driver);
    return driverToExtract?.name;
}