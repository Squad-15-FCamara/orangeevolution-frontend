import styled from "styled-components";
import Logo from './logo-login.svg'
import backgroundPic from './background.svg'

export const Wrapper = styled.div`
box-sizing: border-box;
background-image: url(${backgroundPic});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
margin: 0;
padding: 0;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Titulo = styled.h1`
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  margin-top: 28px;
  margin-bottom: 33px;
  color: black;
`

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 304px;
  width: 100%;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
width: 100%;
color: orange;
max-width: 438px;
height: 100%;
max-height: 560px;
border-radius: 16px;
`

export const Input = styled.input`
width: calc(100% - 18px);
height: 48px;
margin: 8px 0px;
border: 1px solid #929292;
background-color: transparent;
border-radius: 10px;
color: white;
outline: none;
font-family: 'Montserrat', sans-serif;
font-size: 12px;
padding: 0;
padding-left: 16px;

::placeholder {
  opacity: 0.8;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
}

:focus{
  border-color: orange;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
`

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;

`
export const CheckBox = styled.input`

`

export const SpanWithLine = styled(Span)`
  justify-content: space-evenly;
  font-size: 12px;
  color: gray;
  margin: 24px 0px 24px 0px;

  &:before{
    content: "";
    display: block;
    width: 120px;
    height: 1px;
    background: gray;
  }

  &:after {
    content: "";
    display: block;
    width: 120px;
    height: 1px;
    background: gray;

  }
`

export const ForgetPassword = styled.a`
  font-size: 12px;
  white-space: nowrap;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
`

export const Button = styled.button`
width: 100%;
max-width: 400px;
padding: 16px 0px;
cursor: pointer;
border-radius: 4px;
background-color: #36357E;
color: white;
transition: 0.5s;
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-weight: 600;
border-radius: 10px;
border-style: none;


:hover{
  box-shadow: none;

}
`

export const Label = styled.label`
  font-size: 12px;
  color: black;
  width: 100%;
`
export const SpanCadastro = styled(Span)`
  font-size: 12px;
  color: black;
  margin-top: 24px;
  justify-content: center;
  gap: 5px;
`
export const Cadastro = styled(ForgetPassword)`
  color: black;
`
