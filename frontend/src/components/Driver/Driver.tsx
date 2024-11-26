import { IOptionDrivers } from "../../helpers/IOptionDrivers";
import { DriverContainer } from "./styles";

interface IDriverProps {
    driver: IOptionDrivers
}

export const Driver = ({driver}: IDriverProps) => {
    return(
        <DriverContainer>
            <table>
                <tr>
                    <th>Nome</th>
                    <td>{driver.name}</td>
                </tr>
                <tr>
                    <th>Avaliação</th>
                    <td>{driver.review.rating}/5</td>
                </tr>
                <tr>
                    <th>Carro</th>
                    <td>{driver.vehicle}</td>
                </tr>
                <tr>
                    <th>KM mínimo</th>
                    <td>{driver.minimum}</td>
                </tr>
                <tr>
                    <th>Valor</th>
                    <td><h4>R$ {driver.value}</h4></td>
                </tr>
            </table>
            <button>Selecionar</button>
        </DriverContainer>
    )
}