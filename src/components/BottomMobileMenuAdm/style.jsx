import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  z-index: 9999;
  bottom: 0;
  background: #fbfbfb;
  box-shadow: 0px -1px 8px rgba(0, 0, 0, 0.16);
  border-radius: 20px 20px 0px 0px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const WrapperLink = styled(Link)`
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #929292;
  gap: 5px;
`;
export const Text = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
`;

export const HomeDiv = styled(WrapperLink)``;
export const HomeIcon = styled(FontAwesomeIcon)`
  width: 20px;
  color: ${(props) => (props.pathname === '/homeadm' ? '#36357E' : '#929292')};
`;
export const HomeText = styled(Text)`
  color: ${(props) => (props.pathname === '/homeadm' ? '#36357E' : '#929292')};
`;

export const BuscaDiv = styled(WrapperLink)``;
export const BuscaIcon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.pathname === '/searchadm' ? '#36357E' : '#929292'};
`;
export const BuscaText = styled(Text)`
  color: ${(props) =>
    props.pathname === '/searchadm' ? '#36357E' : '#929292'};
`;

export const ProgressoDiv = styled(WrapperLink)``;
export const ProgressoIcon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.pathname === '/statisticsadm' ? '#36357E' : '#929292'};
`;
export const ProgressoText = styled(Text)`
  color: ${(props) =>
    props.pathname === '/statisticsadm' ? '#36357E' : '#929292'};
`;

export const PerfilDiv = styled(WrapperLink)``;
export const PerfilIcon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.pathname === '/profileadm' ? '#36357E' : '#929292'};
`;
export const PerfilText = styled(Text)`
  color: ${(props) =>
    props.pathname === '/profileadm' ? '#36357E' : '#929292'};
`;
