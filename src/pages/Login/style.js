
import styled from "styled-components";


export const Wrapper = styled.div`
box-sizing: border-box;
background-color: black;
margin: 0;
padding: 0;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`



export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
width: 100%;
color: orange;
max-width: 400px;
height: 100%;
`

export const Input = styled.input`
width: 95%;
padding: 8px;
margin: 8px 0px;
border-color: gray;
background-color: transparent;
border-radius: 4px;
color: white;

:focus{
  border-color: orange;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
`

export const Button = styled.button`
width: 100%;
max-width: 400px;
padding: 16px 0px;
cursor: pointer;
border-radius: 4px;
background-color: black;
color: gray;
-webkit-box-shadow: 0px 10px 50px -8px rgba(255,90,35,1);
-moz-box-shadow: 0px 10px 50px -8px rgba(255,90,35,1);
box-shadow: 0px 10px 30px -8px rgba(255,90,35,0.6);
transition: 0.5s;

:hover{
  box-shadow: none;

}
`
