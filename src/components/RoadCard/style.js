import styled from 'styled-components';

export const Button = styled.button`
  width: 320px;
  height: 224px;
  border-radius: 20px;
  border: none;
  background-image: ${(props) => props.imgRoad};
`;

export const Wrapper = styled.div`
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;
`;
