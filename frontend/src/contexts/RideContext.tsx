import { createContext, ReactNode, useState } from "react";
import { IEstimateRide } from "../helpers/IEstimateRide";
import { FieldValues } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { IAdress } from "../helpers/IAddress";

interface IRideContextProviderType {
    estimateRides: IEstimateRide | undefined;
    handleEstimateRide: (data: FieldValues) => void
    setEstimateRides: (data: IEstimateRide | undefined) => void
    confirmRide: (data: FieldValues) => void;
    address: IAdress | undefined;
    errorMessage: string;
}

interface IRideContextProviderProps {
    children: ReactNode
}

export const RideContext = createContext({} as IRideContextProviderType)

export function RideContextProvider({children}: IRideContextProviderProps) {
    const [estimateRides, setEstimateRides_] = useState<IEstimateRide>();
    const [address, setAddress] = useState<IAdress>()
    const [errorMessage, setErrorMessage] = useState("")
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
            /*
            const coordinate = estimate.data.routeResponse.routes[0].legs[0].polyline.encodedPolyline
            const validCoordinate = coordinate.replace(/\\/g, "%5C");
            const urlImage = await axios.get(`https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=enc:${validCoordinate}&key=GOOGLE_API_KEY`, corsConfig);
            console.log(urlImage)*/
            const addressData = {origin: data.origin, destination: data.destination}
            setAddress(addressData);
            navigate("/confirm")
        } catch (err) {
            const error = err as AxiosError;
            if(!axios.isAxiosError(error)){
                console.log(error)
            }
            console.log(error.response?.data.error_description)
        }
    }

    async function confirmRide(data: object){
        try {
            const confirm = await axios.patch("http://localhost:8080/ride/confirm", data)
            if(confirm.request.status === 200){
                setErrorMessage("");
                alert("Viagem confirmada. Boa viagem!!");
            }
        } catch (err) {
            const error = err as AxiosError;
            if(!axios.isAxiosError(error)){
                console.log(error)
            }
            setErrorMessage(error.response?.data.error_description)
        }
    }

    return(
        <RideContext.Provider
        value={{
            estimateRides,
            handleEstimateRide,
            setEstimateRides,
            confirmRide,
            address,
            errorMessage          
        }}
        >
            {children}
        </RideContext.Provider>
    )
}