import { Wrapper, LogoDiv, Notification, LogOut, Logo } from './style';
import {
  faArrowRightFromBracket,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import LogoMobile from './logo_mobile.svg';
import { Link } from 'react-router-dom';

export const TopMobileMenu = () => {
  return (
    <Wrapper>
      <LogoDiv to="/home">
        <Logo src={LogoMobile} />
      </LogoDiv>
      <Notification icon={faBell} />
      <Link to="/">
        <LogOut icon={faArrowRightFromBracket} />
      </Link>
    </Wrapper>
  );
};
