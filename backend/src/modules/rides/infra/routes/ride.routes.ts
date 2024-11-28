import { Router } from "express";
import { RideController } from "../controllers/RideController";
import { validateRequest } from "../../../../shared/infra/middlewares/validateRequest";
import { estimateRideSchema } from "../../domain/schemas/estimateRideSchema";
import { getRideSchema } from "../../domain/schemas/getRideSchema";
import { validateParams } from "../../../../shared/infra/middlewares/validateParams";


export const rideRoutes = Router();
const rideController = new RideController();

rideRoutes.post("/estimate", validateRequest(estimateRideSchema), rideController.estimate);
rideRoutes.patch("/confirm", rideController.confirm);
rideRoutes.get("/", validateParams(getRideSchema), rideController.find)
rideRoutes.get("/:customer_id", validateParams(getRideSchema), rideController.find)
rideRoutes.post("/map", rideController.createMap)