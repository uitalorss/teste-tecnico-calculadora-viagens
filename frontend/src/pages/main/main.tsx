import { FieldValues, useForm } from "react-hook-form"
import { Button, FormRoutes } from "./styles"
import { useContext } from "react";
import { RideContext } from "../../contexts/RideContext";
import { Container, Header, SpanError } from "../../styles/global";
import { Link } from "react-router-dom";



export const Main = () => {
    const {register, handleSubmit} = useForm();
    const {handleEstimateRide, errorMessage} = useContext(RideContext);

    const onsubmit = async(data: FieldValues) => {
        handleEstimateRide(data);
    }

    return(
        <Container>
            <Header>
                <h3>Para onde vamos?</h3>
            </Header>
            <FormRoutes>
                    <input type="text" placeholder="id Usuário" {...register("customer_id")}/>
                    <input type="text" placeholder="Partida" {...register("origin")}/>
                    <input type="text" placeholder="Destino" {...register("destination")}/>
                    <Button onClick={() => handleSubmit(onsubmit)()}><span>Buscar</span></Button>
                    <Link to={"/history"}>
                        <span>Histórico</span>
                    </Link>
            </FormRoutes>
            <SpanError className={errorMessage ? "active" : ""}>
                {errorMessage }
            </SpanError>
        </Container>
    )
}