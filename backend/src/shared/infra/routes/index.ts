import { Router } from "express";
import { rideRoutes } from "../../../modules/rides/infra/routes/ride.routes";


export const router = Router();

router.use("/ride", rideRoutes);