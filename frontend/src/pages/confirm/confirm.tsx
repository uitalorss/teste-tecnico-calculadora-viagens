import { useContext } from "react"
import { Container, Header } from "../../styles/global"
import { RideContext } from "../../contexts/RideContext"
import { RideInfo, RideOptions } from "./styles"
import { DriverList } from "../../components/DriverList/DriverList"


export const Confirm = () => {
    const {estimateRides} = useContext(RideContext)

    return(
        <Container>
            <Header>
                <h3>Suas opções de viagem</h3>
            </Header>

            <RideOptions>
                <RideInfo>
                    <div>
                        <h4>Distância: </h4>
                        <span>{(estimateRides!.distance / 1000)} km</span>
                    </div>
                    <div>
                        <h4>Tempo médio da viagem: </h4>
                        <span>{(Number(estimateRides?.duration.slice(0, -1)) / 60).toFixed(0)} minutos</span>
                    </div>
                    
                    
                </RideInfo>
                <h3>Motoristas Disponíveis</h3>
                <DriverList driversList={estimateRides!.options} />
            </RideOptions>
        </Container>
    )
}