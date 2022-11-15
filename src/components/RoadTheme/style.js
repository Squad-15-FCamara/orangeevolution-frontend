import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid #4140bf;
  border-radius: 20px;
  background-color: #e2e2ff;
  display: flex;
`;

export const TextContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
`;

export const LeftBar = styled.div`
  background-color: #4140bf;
  width: 20px;
  height: 56px;
  border-radius: 20px 0px 0px 20px;
`;

export const Theme = styled.h2`
  font-weight: 600;
  font-size: 1.25rem;
  padding-left: 21px;
`;
