import { Router } from "express";
import { RideController } from "../controllers/RideController";
import { validateRequest } from "../../../../shared/infra/middlewares/validateRequest";
import { estimateSchema } from "../../domain/schemas/estimateSchema";


export const rideRoutes = Router();
const rideController = new RideController();

rideRoutes.post("/estimate", validateRequest(estimateSchema), rideController.estimate);
rideRoutes.patch("/confirm", rideController.confirm);
rideRoutes.get("/:customer_id", rideController.find)