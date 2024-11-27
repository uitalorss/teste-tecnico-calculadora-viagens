import { Repository } from "typeorm";
import { IConfirmRideDTO } from "../../domain/models/DTO/IConfirmRideDTO";
import { IGetRidesDTO } from "../../domain/models/DTO/IGetRIdesDTO";
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

    public async get({customer_id, driver_id}: IGetRidesDTO): Promise<Ride[]> {
        if(driver_id){
            const rides = await this.rideRepository.find({
                where: {
                    customer_id,
                    driver: parseInt(driver_id)
                },order: {
                    created_at: "DESC"
                }
            });
            return rides;
        }else{
            const rides = await this.rideRepository.find({
                where: {
                    customer_id
                },order: {
                    created_at: "DESC"
                }
            });
            return rides;
        }
    }
}