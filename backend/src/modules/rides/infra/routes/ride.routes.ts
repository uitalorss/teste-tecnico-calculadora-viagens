import { Router } from "express";
import { RideController } from "../controllers/RideController";


export const rideRoutes = Router();
const rideController = new RideController();

rideRoutes.post("/estimate", rideController.estimate);
rideRoutes.patch("/confirm", rideController.confirm)