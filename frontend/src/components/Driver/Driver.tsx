import { useContext } from "react";
import { IOptionDrivers } from "../../helpers/IOptionDrivers";
import { ContentDriver, DriverContainer } from "./styles";
import { RideContext } from "../../contexts/RideContext";

interface IDriverProps {
    driver: IOptionDrivers
}

interface ISubmitRide {
    driver_id: number;
    driver_name: string;
    value: string;
}

export const Driver = ({driver}: IDriverProps) => {
    const {estimateRides, confirmRide, address, customer} = useContext(RideContext);

    const onsubmit = ({driver_id, driver_name, value}: ISubmitRide) => {
        const ride = {
            customer_id: customer,
            origin: address?.origin,
            destination: address?.destination,
            distance: estimateRides?.distance,
            duration: estimateRides?.duration,
            driver: {
                id: driver_id,
                name: driver_name
            },
            value: Number(value)
        }
        confirmRide(ride);
    }

    return(
        <DriverContainer>
            <ContentDriver>
                <h4>Nome:</h4>
                <p>{driver.name}</p>
                <h4>Avaliação:</h4>
                <p>{driver.review.rating}/5</p>
            </ContentDriver>
            <ContentDriver className="description">
                <p>{driver.description}</p>
            </ContentDriver>
            <ContentDriver>
                <h4>Carro:</h4>
                <p>{driver.vehicle}</p>
            </ContentDriver>
            <ContentDriver>
            </ContentDriver>
            <ContentDriver>
                <h4>Valor:</h4>
                <p>R$ {driver.value}</p>
            </ContentDriver>
            <button onClick={() => onsubmit({driver_id: driver.id, driver_name: driver.name, value: driver.value})}>Escolher</button>
        </DriverContainer>
    )
}