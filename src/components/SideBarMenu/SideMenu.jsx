import { faArrowRightFromBracket, faChartLine, faBell, faFolderOpen, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import avatar from './avatar.svg'
import logo from './logo_orange.svg'
import {
  Wrapper,
  Logo,
  Menu,
  Links,
  LinkStyledSearch,
  SearchIcon,
  Input,
  HomeIcon,
  PastasIcon,
  NotificaIcon,
  ProgressoIcon,
  Profile,
  Avatar,
  Name,
  LogOutIcon,
  HomeLinkStyled,
  PastasLinkStyled,
  NotificaLinkStyled,
  ProgressionLinkStyled,
  TextHome,
  TextNotifica,
  TextPastas,
  TextProgression
} from "./style";

  import { useLocation } from 'react-router-dom';

export const SideMenu = () => {

  let {pathname} = useLocation()

  return(
    <Wrapper>
    <Logo src={logo}/>
      <Menu>

          <Links>
            <LinkStyledSearch>
              <SearchIcon icon={faMagnifyingGlass} />
              <Input placeholder='Buscar'/>
            </LinkStyledSearch>
            <HomeLinkStyled pathname={pathname} to='/'>
              <HomeIcon pathname={pathname} icon={faHouse}/>
              <TextHome pathname={pathname}>Home</TextHome>
            </HomeLinkStyled>
            <PastasLinkStyled pathname={pathname} to='/savedcontent'>
              <PastasIcon pathname={pathname} icon={faFolderOpen}/>
              <TextPastas pathname={pathname}>Pastas</TextPastas>
            </PastasLinkStyled>
            <NotificaLinkStyled pathname={pathname} to='/profile'>
              <NotificaIcon pathname={pathname} icon={faBell} />
              <TextNotifica pathname={pathname}>Notificações</TextNotifica>
            </NotificaLinkStyled>
            <ProgressionLinkStyled pathname={pathname} to='/profile'>
              <ProgressoIcon pathname={pathname} icon={faChartLine}/>
              <TextProgression pathname={pathname}>Progresso</TextProgression>
            </ProgressionLinkStyled>
          </Links>
        <Profile>
          <Avatar src={avatar}/>
          <Name>Thiago Bandeira</Name>
          <LogOutIcon icon={faArrowRightFromBracket}/>
        </Profile>

      </Menu>
    </Wrapper>
  )
}
