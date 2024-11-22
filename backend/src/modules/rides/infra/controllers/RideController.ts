import "dotenv/config";
import { Request, Response } from "express";
import driversData from "../../../../shared/database/drivers.json";
import { container } from "tsyringe";
import { CreateRideService } from "../../services/CreateRideService";
import { EstimateRideService } from "../../services/EstimateRideService";


export class RideController {
    public async estimate(req: Request, res: Response) {
        const {customer_id, origin, destination} = req.body;
        const estimateRide = container.resolve(EstimateRideService);

        const options = await estimateRide.execute({customer_id, origin, destination})

        res.json(options);
    }

    public async confirm(req: Request, res: Response) {
        const {customer_id, origin, destination, distance, duration, driver, value} = req.body; 
        const confirmRide = container.resolve(CreateRideService);

        const ride = await confirmRide.execute({customer_id, origin, destination, distance, duration, driver, value});
        res.json(ride)
    }
}