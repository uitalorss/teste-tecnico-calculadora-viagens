import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background: #03a877;
  padding: 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2rem;
  }
`;

export const FormRoutes = styled.div`
    padding-top: 1rem;
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
  cursor: pointer;

  transition: background-color 0.1s;
`;

export const RidesContent = styled.div`
    color: #2d3436;
`