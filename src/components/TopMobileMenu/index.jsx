import {
  Wrapper,
  LogoDiv,
  Notification,
  LogOut,
  Logo,
  InputDivMobile,
  SearchIconMobile,
} from './style';
import {
  faArrowRightFromBracket,
  faBell,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import LogoMobile from './logo_mobile.svg';
import { Link } from 'react-router-dom';
import { LinkStyledSearch, SearchIcon, Input } from '../SideBarMenu/style';
import { useContext } from 'react';
import { Context } from '../../context/context';

export const TopMobileMenu = () => {
  const { inputSearch, setInputSearch } = useContext(Context);

  return (
    <Wrapper>
      <LogoDiv to="/home">
        <Logo src={LogoMobile} />
      </LogoDiv>
      <InputDivMobile>
        <LinkStyledSearch to="search">
          <SearchIconMobile icon={faMagnifyingGlass} />
        </LinkStyledSearch>
        <Input
          type="text"
          placeholder="Buscar"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </InputDivMobile>
      <Notification icon={faBell} />
      <Link to="/">
        <LogOut icon={faArrowRightFromBracket} />
      </Link>
    </Wrapper>
  );
};
