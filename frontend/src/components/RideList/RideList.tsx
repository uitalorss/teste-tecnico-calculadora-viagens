import { IRide } from "../../helpers/IRide";
import { Ride } from "../Ride/Ride";
import { RideListContainer } from "./styles"

interface IRideListProps {
    customer_id: string;
    rides: IRide[]
}

export const RideList = ({customer_id, rides}: IRideListProps) => {
    return(
        <RideListContainer>
            <div className="userData">
                <span>Usuário: </span>
                <span>{customer_id}</span>
            </div>
            {rides.map((item) => {
                return <Ride key={item.id} ride={item} />
            })}
        </RideListContainer>
    )
}