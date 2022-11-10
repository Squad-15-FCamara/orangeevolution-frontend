import { Wrapper, Favoritos, Incompletos, Titulo, WrapperConteudo, Subtitulo} from "./style"

export const RightSideMenu = () => {
  return (
      <Wrapper>
        <Titulo>Meus estudos</Titulo>
        <WrapperConteudo>
          <Favoritos>
              <Subtitulo>Favoritos</Subtitulo>
              <div style={{height: '100px', border: '1px solid gray', width: '320px'}}>uma div exemplo</div>
              <div style={{height: '100px', border: '1px solid gray', width: '320px'}}>uma div exemplo</div>
              <div style={{height: '100px', border: '1px solid gray', width: '320px'}}>uma div exemplo</div>


          </Favoritos>
          <Incompletos>
              <Subtitulo>Incompletos</Subtitulo>
              <div style={{height: '100px', border: '1px solid gray', width: '320px'}}>uma div exemplo</div>
              <div style={{height: '100px', border: '1px solid gray', width: '320px'}}>uma div exemplo</div>
              <div style={{height: '100px', border: '1px solid gray', width: '320px'}}>uma div exemplo</div>



          </Incompletos>
        </WrapperConteudo>
      </Wrapper>
  )
}
