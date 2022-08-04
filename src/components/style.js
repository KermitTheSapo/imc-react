import styled, {createGlobalStyle} from "styled-components";

export const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export const Div = styled.div`
    background-color: orange;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    height:90vh;
`

export const Form = styled.form`
    height: 10vh;
    border: solid;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
`

export const Peso = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: space-evenly;
       align-items: center;
`

export const Altura = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;   
`