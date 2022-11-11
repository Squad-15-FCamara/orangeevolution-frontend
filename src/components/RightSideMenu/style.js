import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 1s all;

  @media screen and (max-width: 1300px){
    width: 0px;
  }
`
export const Titulo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 0;
  padding-left: 20px;

`
export const Subtitulo = styled.h3`
font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 0;

`


export const WrapperConteudo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;
  padding-left: 20px;
`

export const Incompletos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Favoritos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
