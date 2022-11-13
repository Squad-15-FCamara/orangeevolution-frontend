import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faCircleXmark,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 235px;
  height: 100vh;
  position: fixed;
  background-color: white;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Menu = styled.div`
  width: 235px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin-top: 20px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const HomeLinkStyled = styled(Link)`
  display: flex;
  height: 48px;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  width: 219px;
  border-radius: 10px;
  margin-top: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.pathname === '/home' ? '#36357E' : 'white'};
`;

export const TextHome = styled.p`
  color: ${(props) => (props.pathname === '/home' ? 'white' : '#36357E')};
  list-style-type: none;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const HomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.pathname === '/home' ? 'white' : '#36357E')};
  padding-left: 26px;
  font-size: 25px;
`;

export const PastasLinkStyled = styled(Link)`
  display: flex;
  height: 48px;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  width: 219px;
  border-radius: 10px;
  margin-top: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.pathname === '/savedcontent' ? '#36357E' : 'white'};
`;
export const PastasIcon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.pathname === '/savedcontent' ? 'white' : '#36357E'};
  padding-left: 29px;
  font-size: 25px;
`;

export const TextPastas = styled.p`
  color: ${(props) =>
    props.pathname === '/savedcontent' ? 'white' : '#36357E'};
  list-style-type: none;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const NotificaLinkStyled = styled(Link)`
  display: flex;
  height: 48px;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  width: 219px;
  border-radius: 10px;
  margin-top: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.pathname === '/profile' ? '#36357E' : 'white'};
`;
export const NotificaIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.pathname === '/profile' ? 'white' : '#36357E')};
  padding-left: 29px;
  font-size: 25px;
`;

export const TextNotifica = styled.p`
  color: ${(props) => (props.pathname === '/profile' ? 'white' : '#36357E')};
  list-style-type: none;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const ProgressionLinkStyled = styled(Link)`
  display: flex;
  height: 48px;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  width: 219px;
  border-radius: 10px;
  margin-top: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.pathname === '/profile' ? '#36357E' : 'white'};
`;
export const ProgressoIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.pathname === '/profile' ? 'white' : '#36357E')};
  padding-left: 29px;
  font-size: 25px;
`;

export const TextProgression = styled.p`
  color: ${(props) => (props.pathname === '/profile' ? 'white' : '#36357E')};
  list-style-type: none;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #36357e;
  height: 48px;
  border-radius: 10px;
  width: 220px;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  height: 48px;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  width: 219px;
  border-radius: 10px;
  margin-top: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.pathname === '/' ? '#36357E' : 'white'};
`;
export const LinkStyledSearch = styled(LinkStyled)`
  width: 20px;
  height: 40px;
  position: relative;
  margin: 0;
`;
export const Input = styled.input`
  height: 25px;
  outline: none;
  border: none;
  font-size: 20px;
  padding: 2px;
  padding-left: 10px;
  margin-left: 15px;
  max-width: 130px;
  font-family: 'Montserrat';
  background-color: transparent;

  ::placeholder {
    color: #36357e;
    font-weight: 400;
  }

  :hover {
    ::placeholder {
      color: white;
    }
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  color: #36357e;
  padding-right: 15px;
  font-size: 25px;
  position: absolute;
  bottom: 8px;
`;

export const LogOutIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  transform: rotate(180deg);
  font-size: 25px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  background-color: #36357e;
  gap: 10px;
  height: 80px;
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  bottom: 0;
  width: 235px;
`;

export const Avatar = styled.img`
  max-width: 40px;
  padding-left: 16px;
`;

export const Name = styled.p`
  color: #fbfbfb;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

//Modal de logout

export const WrapperModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
  z-index: 9955;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 2s all;
`;

export const WrapperContent = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 40px;
`;

export const WarningDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 10px;
`;

export const WarningIcon = styled(FontAwesomeIcon)`
  color: red;
`;

export const WarningText = styled.h3`
  font-size: 28px;
  font-weight: 400;
  margin: 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
`;

export const LogoutBtn = styled.a`
  height: 48px;
  background-color: #ff4848;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 138px;
  gap: 8px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
export const LogOutIconModal = styled(FontAwesomeIcon)`
  color: white;
`;

export const KeepInBtn = styled.button`
  height: 48px;
  width: 190px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: 1px solid #36357e;
`;

export const KeepInIcon = styled(FontAwesomeIcon)`
  color: #36357e;
`;

export const KeepInText = styled.h3`
  color: #36357e;
  font-size: 14px;
`;

export const Modal = ({ setIsOpen }) => {
  return (
    <WrapperModal onClick={() => setIsOpen(false)}>
      <WrapperContent>
        <WarningDiv>
          <WarningIcon className="fa-2xl" icon={faTriangleExclamation} />
          <WarningText>Deseja sair?</WarningText>
        </WarningDiv>
        <Buttons>
          <LogoutBtn href="/">
            <LogOutIconModal className="fa-xl" icon={faCircleXmark} />
            Quero sair
          </LogoutBtn>
          <KeepInBtn>
            <KeepInIcon className="fa-xl" icon={faCircleCheck} />
            <KeepInText> Continuar logado </KeepInText>
          </KeepInBtn>
        </Buttons>
      </WrapperContent>
    </WrapperModal>
  );
};
