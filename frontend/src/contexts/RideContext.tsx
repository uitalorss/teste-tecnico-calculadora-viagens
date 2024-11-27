import { createContext, ReactNode, useState } from "react";
import { IEstimateRide } from "../helpers/IEstimateRide";
import { FieldValues } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { IAdress } from "../helpers/IAddress";
import { IRideList } from "../helpers/IRideList";
import { IApiError } from "../helpers/IApiError";

interface IRideContextProviderType {
    estimateRides: IEstimateRide | undefined;
    rideList: IRideList | undefined;
    customer: string | undefined;
    handleEstimateRide: (data: FieldValues) => void;
    setEstimateRides: (data: IEstimateRide | undefined) => void;
    confirmRide: (data: FieldValues) => void;
    historyRide: (data: FieldValues) => void;
    address: IAdress | undefined;
    sourceImage: string | undefined;
    errorMessage: string;
}

interface IRideContextProviderProps {
    children: ReactNode
}

interface ICoordinateMapProps {
    coordinate: string
}

// eslint-disable-next-line react-refresh/only-export-components
export const RideContext = createContext({} as IRideContextProviderType)

export function RideContextProvider({children}: IRideContextProviderProps) {
    const [estimateRides, setEstimateRides_] = useState<IEstimateRide>();
    const [rideList, setRideList_] = useState<IRideList>();
    const [customer, setCustomer_] = useState("");
    const [sourceImage, setSourceImage] = useState("");
    const [address, setAddress] = useState<IAdress>();
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function setEstimateRides(data: IEstimateRide | undefined){
        setEstimateRides_(data)
    }

    function setRideList(data: IRideList | undefined){
        setRideList_(data);
    }

    function setCustomer(data: string){
        setCustomer_(data)
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
            
            const encodedMap = {
                coordinate: estimate.data.routeResponse.routes[0].legs[0].polyline.encodedPolyline
            }
            const addressData = {origin: data.origin, destination: data.destination}
            setAddress(addressData);
            setCustomer(data.customer_id);
            setErrorMessage("");
            generateMap(encodedMap);
            navigate("/confirm")
        } catch (err) {
            const error = err as AxiosError;
            if(!axios.isAxiosError(error)){
                console.log(error)
            }
            setCustomer("")
            const responseData: IApiError = error.response?.data as IApiError
            setErrorMessage(responseData.error_description)
        }
    }

    async function confirmRide(data: object){
        try {
            const confirm = await axios.patch("http://localhost:8080/ride/confirm", data)
            if(confirm.request.status === 200){
                setErrorMessage("");
                alert("Viagem confirmada. Boa viagem!!");
                navigate("/history")
            }
        } catch (err) {
            const error = err as AxiosError;
            if(!axios.isAxiosError(error)){
                console.log(error)
            }
            const responseData: IApiError = error.response?.data as IApiError
            setErrorMessage(responseData.error_description)
        }
    }

    async function historyRide(data: FieldValues){
        const query = data.driver_id === "" ? "" : `?driver_id=${data.driver_id}`;
        try {
            const rides = await axios.get(`http://localhost:8080/ride/${data.customer_id}${query}`);
            setRideList(rides.data);
        } catch (err) {
            setRideList(undefined)
            const error = err as AxiosError;
            if(!axios.isAxiosError(error)){
                console.log(error)
            }
            const responseData: IApiError = error.response?.data as IApiError
            setErrorMessage(responseData.error_description)
        }
    }

    async function generateMap(coordinateMap: ICoordinateMapProps){
        const image = await axios.post("http://localhost:8080/ride/map", coordinateMap);
        setSourceImage(image.data.image);
    }

    return(
        <RideContext.Provider
        value={{
            estimateRides,
            handleEstimateRide,
            setEstimateRides,
            confirmRide,
            address,
            errorMessage,
            historyRide,
            rideList,
            customer,
            sourceImage    
        }}
        >
            {children}
        </RideContext.Provider>
    )
}