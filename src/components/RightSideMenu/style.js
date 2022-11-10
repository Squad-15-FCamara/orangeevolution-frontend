import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1100px){
    visibility: hidden;
  }
`
export const Titulo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 0;
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
  height: 100vh;
  /* gap: 50px; */
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
