import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  z-index: 9999;
  top: 0;
  background: #fbfbfb;
  box-shadow: 0px -1px 8px rgba(0, 0, 0, 0.16);
  margin: 0;
  border-radius: 0px 0px 20px 20px;
`;

export const Logo = styled.img``;

export const LogoDiv = styled(Link)`
  width: 100%;
  padding-left: 20px;
`;

export const Notification = styled(FontAwesomeIcon)`
  padding-right: 10px;
  cursor: pointer;
  color: #929292;
  width: 60px;

  :hover {
    color: #36357e;
  }
`;

export const LogOut = styled(FontAwesomeIcon)`
  padding-right: 10px;
  cursor: pointer;
  color: #929292;
  :hover {
    color: #36357e;
  }
`;
