import styled from 'styled-components';

export const FooterS = styled.footer`
  min-width: 100vw;
  height: 21vh;
  background-color: #36357e;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: #fbfbfb;
    margin-top: 25px;
  }

  a {
    color: #fbfbfb;
  }

  a:visited {
    color: #fbfbfb;
  }
`;

export const ContainerBrand = styled.div`
  display: flex;
  gap: 105px;
`;
