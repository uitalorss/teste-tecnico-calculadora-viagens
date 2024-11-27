import styled from "styled-components";


export const RideListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
    div{
        &.userData{
            margin-top: 2.5rem;
        }
    }
    @media only screen and (min-width: 480px) and (max-width: 768px){
        width: 60%;
        margin: 0 auto;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px){
        width: 40%;
        margin: 0 auto;
    }

    @media only screen and (min-width: 1025px){
        width: 40%;
        margin: 0 auto;
    }
`