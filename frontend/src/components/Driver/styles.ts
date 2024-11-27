import styled from "styled-components";


export const DriverContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #2d3436;
    background: #f2f2f2;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    border: 2px solid #b2bec3;
`

export const ContentDriver = styled.div`
    display: flex;
    gap: .25rem .75rem;
    p{
        font-size: .8rem;
    }
    &.description{
        flex-direction: column;
        padding: .25rem 0 0.5rem 0.5rem;
    }
`

export const ChooseButton = styled.button`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 1rem 1.25rem;
    background: #16a085;
    border: none;
    border-radius: 8px;
    color: #f2f2f2;
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    cursor: pointer;

    transition: background-color 0.1s;
`