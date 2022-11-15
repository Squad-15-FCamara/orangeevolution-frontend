import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-evenly;
  h2 {
    font-weight: 500;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: 100;
  }

  @media screen and (max-width: 900px) {
    padding-left: 20px;
    h2 {
      font-size: 1rem;
    }
  }
`;
