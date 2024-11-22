import "dotenv/config";
import axios from "axios";
import { Request, Response } from "express";
import driversData from "../../../../shared/database/drivers.json";


export class RideController {
    public async estimate(req: Request, res: Response) {
        const {origin, destination} = req.body;

        const estimateData = {
            origin: {
                address: origin
            },
            destination: {
                address: destination
            },
            travelMode: "DRIVE",
            routingPreference: "TRAFFIC_AWARE"
        }

        driversData.sort((a, b) => {
            if(a.minimum < b.minimum)return -1;
            if(a.minimum > b.minimum) return 1;
            return 0;
        })

        try {
            const rideData = await axios.post(`https://routes.googleapis.com/directions/v2:computeRoutes`, estimateData, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": process.env.GOOGLE_API_KEY,
                    "X-Goog-FieldMask": "routes"
                }
            });
            const [ride] = rideData.data.routes[0].legs;

            const drivers = driversData.map((driver) => ({
                ...driver,
                value: driver.fee * (ride.distanceMeters / 1000)
            }))

            const estimated = {
                origin: {
                    latitude: ride.startLocation.latLng.latitude,
                    longitude: ride.startLocation.latLng.longitude
                },
                destination: {
                    latitude: ride.endLocation.latLng.latitude,
                    longitude: ride.endLocation.latLng.latitude
                },
                distance: ride.distanceMeters,
                duration: ride.duration,
                options: drivers,
                routeResponse: rideData.data
            }
            res.json(estimated)
        } catch (error) {
            console.error(error);
        }
    }
}