import { Router } from "express";
import { RideController } from "../controllers/RideController";
import { validateRequest } from "../../../../shared/infra/middlewares/validateRequest";
import { estimateRideSchema } from "../../domain/schemas/estimateRideSchema";


export const rideRoutes = Router();
const rideController = new RideController();

rideRoutes.post("/estimate", validateRequest(estimateRideSchema), rideController.estimate);
rideRoutes.patch("/confirm", rideController.confirm);
rideRoutes.get("/:customer_id", rideController.find)