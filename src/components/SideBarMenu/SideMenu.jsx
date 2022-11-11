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
  TextProgression,
  Modal
} from "./style";

  import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";

export const SideMenu = () => {

  const [isOpen, setIsOpen] = useState(false)
  let {pathname} = useLocation()

  return(
    <>
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
              <TextPastas pathname={pathname}> Salvos </TextPastas>
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
            <Link to='/profile'><Avatar src={avatar}/></Link>
            <Link to='/profile'><Name>Thiago Bandeira</Name></Link>
            <Link onClick={()=> setIsOpen(true)}><LogOutIcon icon={faArrowRightFromBracket}/></Link>
        </Profile>

      </Menu>

    </Wrapper>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

    </>
  )
}
