import {
  faArrowRightFromBracket,
  faChartLine,
  faBell,
  faHouse,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import avatar from './avatarAdm.svg';
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
  NotificaIcon,
  ProgressoIcon,
  Profile,
  Avatar,
  Name,
  LogOutIcon,
  HomeLinkStyled,
  NotificaLinkStyled,
  ProgressionLinkStyled,
  TextHome,
  TextNotifica,
  TextProgression,
  Modal,
  InputDiv,
} from './style';

import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/context';

export const SideBarAdm = () => {
  const [isOpen, setIsOpen] = useState(false);

  let { pathname } = useLocation();

  const { inputSearch, setInputSearch } = useContext(Context);

  return (
    <>
      <Wrapper>
        <a href="/homeadm">
          <Logo src={logo} />
        </a>
        <Menu>
          <Links>
            <InputDiv>
              <LinkStyledSearch to="searchadm">
                <SearchIcon icon={faMagnifyingGlass} />
              </LinkStyledSearch>
              <Input
                type="text"
                placeholder="Buscar"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
              />
            </InputDiv>

            <HomeLinkStyled pathname={pathname} to="/homeadm">
              <HomeIcon pathname={pathname} icon={faHouse} />
              <TextHome pathname={pathname}>Home</TextHome>
            </HomeLinkStyled>
            <NotificaLinkStyled pathname={pathname} to="/profileadm">
              <NotificaIcon pathname={pathname} icon={faBell} />
              <TextNotifica pathname={pathname}>Notificações</TextNotifica>
            </NotificaLinkStyled>
            <ProgressionLinkStyled pathname={pathname} to="/statisticsadm">
              <ProgressoIcon pathname={pathname} icon={faChartLine} />
              <TextProgression pathname={pathname}>
                Estatísticas
              </TextProgression>
            </ProgressionLinkStyled>
          </Links>
          <Profile>
            <Link to="/profileadm">
              <Avatar src={avatar} />
            </Link>
            <Link to="/profileadm">
              <Name>Bianca Maestrini</Name>
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
