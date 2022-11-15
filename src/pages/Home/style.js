import styled from 'styled-components';

export const Card = styled.img`
  object-fit: cover;
  max-width: 400px;
  transition: 0.4s;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    :hover {
      transform: scale(0.9);
    }
  }
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding-left: 20px;

  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const SubHeader = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  padding-left: 20px;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding-left: 320px;
  padding-bottom: 200px;
  max-width: 1205px;
  width: 100%;

  @media screen and (max-width: 900px) {
    padding-left: 0px;
    padding-top: 50px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 350px;
  width: 95%;

  @media screen and (max-width: 900px) {
    height: 230px;
    padding-left: 16%;
  }
`;

export const Status = styled.span`
  font-size: 1.25rem;
  color: #333333;
  font-weight: 500;
  margin-bottom: 16px;
  padding-left: 20px;
`;

export const CardsStudy = styled(Cards)`
  height: 360px;
`;

export const LinkCard = styled.a``;
