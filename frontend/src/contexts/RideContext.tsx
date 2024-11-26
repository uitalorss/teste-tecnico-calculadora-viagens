import { createContext, ReactNode, useState } from "react";
import { IEstimateRide } from "../helpers/IEstimateRide";
import { FieldValues } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface IRideContextProviderType {
    estimateRides: IEstimateRide | undefined;
    handleEstimateRide: (data: FieldValues) => void
    setEstimateRides: (data: IEstimateRide | undefined) => void
}

interface IRideContextProviderProps {
    children: ReactNode
}

export const RideContext = createContext({} as IRideContextProviderType)

export function RideContextProvider({children}: IRideContextProviderProps) {
    const [estimateRides, setEstimateRides_] = useState<IEstimateRide>();
    const navigate = useNavigate();

    function setEstimateRides(data: IEstimateRide | undefined){
        setEstimateRides_(data)
    }

    async function handleEstimateRide(data: FieldValues){
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const corsConfig = {
            headers: {
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
            }
        }
        try {
            const estimate = await axios.post("http://localhost:8080/ride/estimate", data, axiosConfig);
            setEstimateRides(estimate.data)
            const coordinate = estimate.data.routeResponse.routes[0].legs[0].polyline.encodedPolyline
            console.log(coordinate);
            const validCoordinate = coordinate.replace(/\\/g, "%5C");
            console.log(validCoordinate)
            const urlImage = await axios.get(`https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=enc:${validCoordinate}&key=AIzaSyANFT-zRWY8oWocufB0AFk3D9dbf1sX7hs`, corsConfig);
            console.log(urlImage)
        } catch (err) {
            const error = err as AxiosError;
            if(!axios.isAxiosError(error)){
                console.log(error)
            }
            console.log(error.response?.data.error_description)
        }
    }
    return(
        <RideContext.Provider
        value={{
            estimateRides,
            handleEstimateRide,
            setEstimateRides          
        }}
        >
            {children}
        </RideContext.Provider>
    )
}