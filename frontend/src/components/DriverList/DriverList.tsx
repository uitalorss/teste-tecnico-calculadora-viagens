import { IOptionDrivers } from "../../helpers/IOptionDrivers"
import { Driver } from "../Driver/Driver"
import { DriverListContainer } from "./styles"

interface IDriversListProps {
    driversList: IOptionDrivers[]
}

export const DriverList = ({driversList}: IDriversListProps) => {
    return(
        <DriverListContainer>
            {driversList.map((item) => {
                return <Driver key={item.id} driver={item} />
            })}
        </DriverListContainer>
    )
}