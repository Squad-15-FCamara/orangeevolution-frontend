import styled from 'styled-components';

export const PageTitle = styled.h1`
  color: #333333;
  margin: 54px 0 8px 0;
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 24px 0;
`;

export const ButtonS = styled.button`
  cursor: pointer;
  background: none;
  height: 50px;
  border: none;
  padding: 8px 16px;
  border-right: 1px solid black;
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: ${(props) => (props.isclicked === false ? 500 : 700)};
  text-decoration: ${(props) =>
    props.isclicked === false ? 'none' : 'underline'};
`;
