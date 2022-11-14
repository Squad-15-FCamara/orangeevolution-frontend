import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 300px;
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (max-width: 900px) {
    padding-left: 30px;
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  padding-bottom: 50px;
  font-weight: 800;
  font-size: 40px;
`;
