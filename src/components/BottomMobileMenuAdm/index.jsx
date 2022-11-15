import {
  Wrapper,
  HomeDiv,
  HomeIcon,
  HomeText,
  BuscaDiv,
  BuscaIcon,
  BuscaText,
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
  faHouse,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

export const BottomMobileMenuAdm = () => {
  let { pathname } = useLocation();

  return (
    <Wrapper>
      <HomeDiv pathname={pathname} to="/homeadm">
        <HomeIcon pathname={pathname} icon={faHouse} />
        <HomeText pathname={pathname}>Home</HomeText>
      </HomeDiv>
      <BuscaDiv pathname={pathname} to="/searchadm">
        <BuscaIcon pathname={pathname} icon={faMagnifyingGlass} />
        <BuscaText pathname={pathname}>Busca</BuscaText>
      </BuscaDiv>
      <ProgressoDiv pathname={pathname} to="/statisticsadm">
        <ProgressoIcon pathname={pathname} icon={faChartLine} />
        <ProgressoText pathname={pathname}>Estatísticas</ProgressoText>
      </ProgressoDiv>
      <PerfilDiv pathname={pathname} to="/profileadm">
        <PerfilIcon pathname={pathname} icon={faUser} />
        <PerfilText pathname={pathname}>Perfil</PerfilText>
      </PerfilDiv>
    </Wrapper>
  );
};
