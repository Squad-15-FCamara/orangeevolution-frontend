import { StudyCard } from "../StudyCard"
import { Wrapper, Favoritos, Incompletos, Titulo, WrapperConteudo, Subtitulo} from "./style"

export const RightSideMenu = () => {
  return (
      <Wrapper>
        <Titulo>Meus estudos</Titulo>
        <WrapperConteudo>
          <Favoritos>
              <Subtitulo>Favoritos</Subtitulo>
              <StudyCard/>
              <StudyCard/>

          </Favoritos>
          <Incompletos>
              <Subtitulo>Incompletos</Subtitulo>
              <StudyCard/>
              <StudyCard/>



          </Incompletos>
        </WrapperConteudo>
      </Wrapper>
  )
}
