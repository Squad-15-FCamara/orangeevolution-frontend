import {
  Wrapper,
  HomeDiv,
  HomeIcon,
  HomeText,
  BuscaDiv,
  BuscaIcon,
  BuscaText,
  SalvoDiv,
  SalvoIcon,
  SalvoText,
  ProgressoDiv,
  ProgressoIcon,
  ProgressoText,
  PerfilDiv,
  PerfilIcon,
  PerfilText,
} from './style';

import {
  faChartLine,
  faUser,
  faBookmark,
  faHouse,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

export const BottomMobileMenu = () => {
  let { pathname } = useLocation();

  return (
    <Wrapper>
      <HomeDiv pathname={pathname} to="/home">
        <HomeIcon pathname={pathname} icon={faHouse} />
        <HomeText pathname={pathname}>Home</HomeText>
      </HomeDiv>
      <BuscaDiv pathname={pathname} to="/search">
        <BuscaIcon pathname={pathname} icon={faMagnifyingGlass} />
        <BuscaText pathname={pathname}>Busca</BuscaText>
      </BuscaDiv>
      <SalvoDiv pathname={pathname} to="/savedcontent">
        <SalvoIcon pathname={pathname} icon={faBookmark} />
        <SalvoText pathname={pathname}>Salvos</SalvoText>
      </SalvoDiv>
      <ProgressoDiv pathname={pathname} to="/progress">
        <ProgressoIcon pathname={pathname} icon={faChartLine} />
        <ProgressoText pathname={pathname}>Progresso</ProgressoText>
      </ProgressoDiv>
      <PerfilDiv pathname={pathname} to="/profile">
        <PerfilIcon pathname={pathname} icon={faUser} />
        <PerfilText pathname={pathname}>Perfil</PerfilText>
      </PerfilDiv>
    </Wrapper>
  );
};
