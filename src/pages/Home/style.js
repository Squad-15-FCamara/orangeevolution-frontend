import styled from 'styled-components';

export const Card = styled.img`
  object-fit: cover;
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export const SubHeader = styled.h3`
  font-size: 2rem;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding-left: 385px;
  padding-bottom: 200px;
  max-width: 1205px;
  width: 100%;

  @media screen and (max-width: 900px) {
    padding-left: 50px;
    padding-top: 50px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  width: 75%;
`;

export const Status = styled.span`
  font-size: 1.25rem;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const CardsStudy = styled(Cards)`
  height: 360px;
`;
