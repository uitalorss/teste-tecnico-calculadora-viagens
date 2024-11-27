import styled from "styled-components";

export const FormRoutes = styled.div`
    padding-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem 0; 
    input{
        font-size: 1rem;
        padding: 1rem;
        background: #f2f2f2;
        border: none;
        outline: none;
        color: #1c1933;
        line-height: 1.6;
        border-radius: 8px;
    }

    a{
        display: flex;
        align-items: center;
        gap: 0.3rem;
        padding: 1rem 1.25rem;
        background: #55efc4;
        border: none;
        border-radius: 8px;
        color: #2d3436;
        font-weight: bold;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;

        transition: background-color 0.1s;
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 1rem 1.25rem;
  background: #0e453a;
  border: none;
  border-radius: 8px;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  cursor: pointer;

  transition: background-color 0.1s;
`;

export const RidesContent = styled.div`
    color: #2d3436;
`