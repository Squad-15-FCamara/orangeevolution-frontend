import {
  faArrowRightFromBracket,
  faChartLine,
  faBell,
  faBookmark,
  faHouse,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import avatar from './avatar.svg';
import logo from './logo_orange.svg';
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
  Modal,
  InputDiv,
} from './style';

import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';

export const SideMenu = () => {
  const [input, setInput] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  let { pathname } = useLocation();

  const UpdateInput = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });

    // console.log(input)
  };

  // state={{data: input}}

  return (
    <>
      <Wrapper>
        <a href="/home">
          <Logo src={logo} />
        </a>
        <Menu>
          <Links>
            <InputDiv>
              <LinkStyledSearch to={`search/${input}`}>
                <SearchIcon icon={faMagnifyingGlass} />
              </LinkStyledSearch>
              <Input
                type="text"
                placeholder="Buscar"
                name="search"
                value={input.search}
                onChange={(e) => setInput(e.target.value)}
              />
            </InputDiv>

            <HomeLinkStyled pathname={pathname} to="home">
              <HomeIcon pathname={pathname} icon={faHouse} />
              <TextHome pathname={pathname}>Home</TextHome>
            </HomeLinkStyled>
            <PastasLinkStyled pathname={pathname} to="/savedcontent">
              <PastasIcon pathname={pathname} icon={faBookmark} />
              <TextPastas pathname={pathname}> Salvos </TextPastas>
            </PastasLinkStyled>
            <NotificaLinkStyled pathname={pathname} to="/profile">
              <NotificaIcon pathname={pathname} icon={faBell} />
              <TextNotifica pathname={pathname}>Notificações</TextNotifica>
            </NotificaLinkStyled>
            <ProgressionLinkStyled pathname={pathname} to="/profile">
              <ProgressoIcon pathname={pathname} icon={faChartLine} />
              <TextProgression pathname={pathname}>Progresso</TextProgression>
            </ProgressionLinkStyled>
          </Links>
          <Profile>
            <Link to="/profile">
              <Avatar src={avatar} />
            </Link>
            <Link to="/profile">
              <Name>Thiago Bandeira</Name>
            </Link>
            <Link onClick={() => setIsOpen(true)}>
              <LogOutIcon icon={faArrowRightFromBracket} />
            </Link>
          </Profile>
        </Menu>
      </Wrapper>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
};
