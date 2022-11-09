import { faArrowRightFromBracket, faChartLine, faBell, faFolderOpen, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import avatar from './avatar.svg'
import logo from './logo_orange.svg'
import {
  Wrapper,
  Logo,
  Menu,
  Links,
  LinkStyled,
  LinkStyledSearch,
  SearchIcon,
  Input,
  HomeIcon,
  Text,
  PastasIcon,
  NotificaIcon,
  ProgressoIcon,
  Profile,
  Avatar,
  Name,
  LogOutIcon } from "./style";

export const SideMenu = () => {
  return(
    <Wrapper>
    <Logo src={logo}/>
      <Menu>

          <Links>
            <LinkStyledSearch>
              <SearchIcon icon={faMagnifyingGlass} />
              <Input placeholder='Buscar'/>
            </LinkStyledSearch>
            <LinkStyled href='/'>
              <HomeIcon icon={faHouse}/>
              <Text>Home</Text>
            </LinkStyled>
            <LinkStyled href='/savedcontent'>
              <PastasIcon icon={faFolderOpen}/>
              <Text>Pastas</Text>
            </LinkStyled>
            <LinkStyled href='/profile'>
              <NotificaIcon icon={faBell} />
              <Text>Notificações</Text>
            </LinkStyled>
            <LinkStyled href='/profile'>
              <ProgressoIcon icon={faChartLine}/>
              <Text>Progresso</Text>
            </LinkStyled>
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
