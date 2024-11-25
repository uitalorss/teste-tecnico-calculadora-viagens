import { createContext, ReactNode, useState } from "react";
import { IEstimateRide } from "../helpers/IEstimateRide";
import { FieldValues } from "react-hook-form";
import axios, { AxiosError } from "axios";

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

    function setEstimateRides(data: IEstimateRide | undefined){
        setEstimateRides_(data)
    }

    async function handleEstimateRide(data: FieldValues){
        const axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            const estimate = await axios.post("http://localhost:8080/ride/estimate", data, axiosConfig);
            setEstimateRides(estimate.data)
            console.log(estimate.data)
        } catch (err) {
            const error = err as AxiosError;
            if(!axios.isAxiosError(error)){
                console.log(error)
            }
            alert(error.message);
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