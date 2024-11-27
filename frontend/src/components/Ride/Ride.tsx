import { ContentRide, RideContainer } from "./styles";
import { IRide } from "../../helpers/IRide";
import { format } from "date-fns";

interface IRideProps {
    ride: IRide
}

export const Ride = ({ride}: IRideProps) => {
    
    return(
        <RideContainer>
            <h4 className="date">{String(format(new Date(ride.date), "dd/MM/yyyy HH:mm"))}</h4>
            <ContentRide>
                <h4>Nome:</h4>
                <p>{ride.driver.name}</p>
                <h4>Valor:</h4>
                <p>R$ {ride.value}</p>
            </ContentRide>
            <ContentRide>
                <h4>Partida:</h4>
                <p>{ride.origin}</p>
            </ContentRide>
            <ContentRide>
                <h4>Destino:</h4>
                <p>{ride.destination}</p>
            </ContentRide>
            <ContentRide>
                <h4>Distância:</h4>
                <p>{ride.distance / 1000} km</p>
            </ContentRide>
            <ContentRide>
                <h4>Tempo da viagem:</h4>
                <p>{(Number(ride.duration.slice(0, -1)) / 60).toFixed(0)} minutos</p>
            </ContentRide>
        </RideContainer>
    )
}