import styled from "styled-components";


export const RideOptions = styled.div`
    margin-bottom: 2rem;
    h3{
        padding-bottom: 1rem;
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

export const RideInfo = styled.div`
    display: block;
    flex-direction: column;
    margin: -1rem 0 1.5rem 0;
    div{
        display: flex;
        gap: 1rem 0.5rem;
    }
`

export const MapSection = styled.div`
    margin: 0 0 2rem 0;
    img{
        display: block;
        margin-bottom: 2rem;
        width: 100%;
        border-radius: 8px;
    }
    @media only screen and (min-width: 480px) and (max-width: 768px){
        width: 60%;
        margin: 0 auto;
        p{
            padding: 2rem 0;
        }
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px){
        width: 40%;
        margin: 0 auto;
        p{
            padding: 2rem 0;
        }
    }

    @media only screen and (min-width: 1025px){
        width: 40%;
        margin: 0 auto;
        p{
            padding: 4rem 0;
        }
    }
`