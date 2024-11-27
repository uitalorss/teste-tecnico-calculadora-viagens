import styled from "styled-components";


export const FormGroup = styled.div`
    padding-top: 1.5rem;
    display: flex;
    gap: 0 1rem;
    div{
        display: flex;
        flex-direction: column; 
        input{
            width: 100%;
            font-size: 1rem;
            padding: 1rem;
            background: #f2f2f2;
            border: none;
            outline: none;
            color: #1c1933;
            line-height: 1.6;
            border-radius: 6px;
        }
        &.button{
            justify-content: flex-end;
        }
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