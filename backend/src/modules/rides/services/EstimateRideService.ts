import axios from "axios";
import { injectable } from "tsyringe";
import driversData from "../../../shared/database/drivers.json"
import { IEstimateRideRequestDTO } from "../domain/models/DTO/IEstimateRideRequestDTO";
import { InvalidDataError } from "../../../shared/errors/ApiError";

@injectable()
export class EstimateRideService {

    public async execute({customer_id, origin, destination}: IEstimateRideRequestDTO){
        if(origin === destination){
            throw new InvalidDataError("Endereços de partida e destino são iguais.")
        }

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
            return estimated
        } catch (error) {
            console.error(error);
        }
    }
}