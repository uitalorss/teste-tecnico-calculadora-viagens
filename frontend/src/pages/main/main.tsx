import { FieldValues, useForm } from "react-hook-form"
import { Container } from "../../styles/container"
import { Button, FormRoutes, Header, RidesContent } from "./styles"
import { useContext } from "react";
import { RideContext } from "../../contexts/RideContext";


export const Main = () => {
    const {register, handleSubmit} = useForm();
    const {handleEstimateRide, estimateRides} = useContext(RideContext)

    const onsubmit = async(data: FieldValues) => {
        handleEstimateRide(data)
    }

    return(
        <Container>
            <Header>
                <p>Para onde vamos?</p>
                <FormRoutes>
                    <input type="text" placeholder="id Usuário" {...register("customer_id")}/>
                    <input type="text" placeholder="Partida" {...register("origin")}/>
                    <input type="text" placeholder="Destino" {...register("destination")}/>
                    <Button onClick={() => handleSubmit(onsubmit)()}>Buscar</Button>
                </FormRoutes>
            </Header>
            <RidesContent>
                {
                    estimateRides !== undefined ? (
                        <span>Distância: {(estimateRides.distance / 1000)} km</span>
                    ):(
                        <p>Nada a mostrar</p>
                    )
                }
            </RidesContent>
        </Container>
    )
}