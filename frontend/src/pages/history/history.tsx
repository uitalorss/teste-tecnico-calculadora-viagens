import { FieldValues, useForm } from "react-hook-form"
import { Container, Header } from "../../styles/global"
import { Button, FormGroup } from "./styles"
import { useContext } from "react";
import { RideContext } from "../../contexts/RideContext";
import { RideList } from "../../components/RideList/RideList";


export const History = () => {
    const {handleSubmit, register} = useForm();
    const {historyRide, rideList} = useContext(RideContext)

    const onsubmit = (data: FieldValues) => {
        historyRide(data);
    }

    return(
        <Container>
            <Header>
                <h3>Minhas viagens</h3>
            </Header>
            <FormGroup>
                    <div>
                        <span>Usuário</span>
                        <input type="number" {...register("customer_id")}/>
                    </div>
                    <div>
                        <span>Motorista</span>
                        <input type="number" {...register("driver_id")}/>
                    </div>
                    <div className="button">
                        <Button onClick={() => handleSubmit(onsubmit)()}>Buscar</Button>
                    </div>
                </FormGroup>
                
                {!rideList ? (
                    <div></div>
                ):(
                    <RideList  customer_id={rideList?.customer_id} rides={rideList?.rides}/>
                )}
        </Container>
    )
}