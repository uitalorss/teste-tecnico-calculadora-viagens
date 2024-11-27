import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }

  p{
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }
`;

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: #03a877;
  color: #f2f2f2;
  padding: 0 2rem 1rem 2rem;
  margin: 0 auto;
  --webkit-font-smoothing: antialiased;
`;

export const Header = styled.header`
  display: flex;
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

export const SpanError = styled.span`
  &.active {
    display: block;
    padding: 1rem;
    background: #ecf0f160;
    color: #34495e;
    border-radius: 10px;
    text-align: center;

    @media only screen and (min-width: 480px) and (max-width: 768px){
        width: 60%;
        margin: 1.5rem auto 0 auto;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px){
        width: 40%;
        margin: 1.5rem auto 0 auto;
    }

    @media only screen and (min-width: 1025px){
        width: 40%;
        margin: 1.5rem auto 0 auto;
    }
  }

`;