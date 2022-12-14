import styled from 'styled-components';

export const DiscordContainer = styled.div`
  width: 85px;
  height: 85px;
  position: fixed;
  right: 60px;
  bottom: 50px;
  z-index: 10;
  transition: 0.4s;

  &:hover {
    scale: 1.1;
  }
`;
