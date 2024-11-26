import { useContext } from "react"
import { Container, Header, SpanError } from "../../styles/global"
import { RideContext } from "../../contexts/RideContext"
import { RideOptions } from "./styles"
import { DriverList } from "../../components/DriverList/DriverList"


export const Confirm = () => {
    const {estimateRides, errorMessage} = useContext(RideContext)

    return(
        <Container>
            <Header>
                <h3>Suas opções de viagem</h3>
            </Header>

            <RideOptions>
                <span>Distância: {(estimateRides!.distance / 1000)} km</span>
                <h3>Motoristas</h3>
                <DriverList driversList={estimateRides!.options} />
            </RideOptions>
            <SpanError className={errorMessage === "" ? "" : "active"}>
                    {errorMessage}
            </SpanError>

        </Container>
    )
}