import styled from 'styled-components';

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Gradient = styled.h1`
  background: linear-gradient(244.96deg, #4a7bfa -11.4%, #0e2b77 114.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: 2.5rem;
  margin: 13px 0 8px 0;
`;

export const Stats = styled.p`
  margin: 0;

  @media screen and (max-width: 900px) {
    padding: 15px;
  }
`;

export const Themes = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
`;

export const ContainerTheme = styled.div`
  width: 74%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 900px) {
    padding: 15px;
  }
`;
