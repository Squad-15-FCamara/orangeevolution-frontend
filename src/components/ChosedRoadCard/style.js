import styled from 'styled-components';

export const Container = styled.div`
  width: 769px;
  height: 100px;
  border: 1px solid #4140bf;
  border-radius: 20px;
  background-color: #e2e2ff;
  display: flex;
`;

export const LeftBar = styled.div`
  background-color: #4140bf;
  width: 20px;
  height: 100px;
  border-radius: 20px 0px 0px 20px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 1rem;
  display: block;
`;

export const FaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2e2ff;
  width: 10%;
  border-radius: 0px 20px 20px 0px;
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    &:nth-child(1) {
      stroke: #4140bf;
      stroke-width: 50;
      color: transparent;
    }
  }
`;
