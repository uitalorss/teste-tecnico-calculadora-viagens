import styled from "styled-components";


export const RideContainer = styled.div`
    display: flex;
    gap: .5rem 0;
    flex-direction: column;
    color: #2d3436;
    background: #f2f2f2;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    border: 2px solid #b2bec3;
    h4{
        &.date{
            margin-bottom: .5rem;
            margin-left: .5rem;
            color: #16a085;
        }
    }
`

export const ContentRide = styled.div`
    display: flex;
    gap: .25rem .75rem;
    align-items: center;
    p{
        font-size: .8rem;
    }
    &.description{
        flex-direction: column;
        padding: .25rem 0 0.5rem 0.5rem;
    }
`