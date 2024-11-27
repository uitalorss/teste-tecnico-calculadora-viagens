import "dotenv/config";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRideService } from "../../services/CreateRideService";
import { EstimateRideService } from "../../services/EstimateRideService";
import { GetRidesService } from "../../services/GetRidesService";
import { InvalidDataError } from "../../../../shared/errors/ApiError";
import { CreateMapService } from "../../services/createMapService";


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

    public async find(req: Request, res: Response){
        const {customer_id} = req.params;
        const {driver_id} = req.query;
        const getRides = container.resolve(GetRidesService);
        
        const rides = await getRides.execute({customer_id, driver_id});
        res.json(rides);
    }

    public async createMap(req: Request, res: Response){
        const {coordinate} = req.body;
        const createMap = container.resolve(CreateMapService);

        const map = await createMap.execute(coordinate);
        
        res.json({image: `data:image/jpeg;base64,${map}`})
    }
}