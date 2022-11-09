import { faArrowRightFromBracket, faChartLine, faBell, faFolderOpen, faStairs, faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import avatar from './avatar.svg'
import {
  Wrapper,
  Logo,
  Menu,
  Links,
  LinkStyled,
  SearchIcon,
  Input,
  HomeIcon,
  Text,
  TrilhasIcon,
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
    <Logo/>
      <Menu>

          <Links>
            <LinkStyled>
              <SearchIcon icon={faMagnifyingGlass} />
              <Input placeholder='Buscar'/>
            </LinkStyled>
            <LinkStyled href='/'>
              <HomeIcon icon={faHouse}/>
              <Text>Home</Text>
            </LinkStyled>
            <LinkStyled href='/road'>
              <TrilhasIcon icon={faStairs}/>
              <Text>Trilhas</Text>
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
