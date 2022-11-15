import styled from 'styled-components';

export const PageTitle = styled.h1`
  color: #333333;
  margin: 54px 0 8px 0;

  @media screen and (max-width: 900px) {
    padding: 15px;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0;

  @media screen and (max-width: 900px) {
    margin: 0;
    padding: 15px;
  }
`;

export const ButtonS = styled.button`
  cursor: pointer;
  background: none;
  height: 50px;
  border: none;
  padding: 5px 12px;
  border-right: 1px solid gray;
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: ${(props) => (!props.clicked ? 500 : 700)};
  text-decoration: ${(props) => (!props.clicked ? 'none' : 'underline')};

  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
    padding-left: 10px;
  }
`;
