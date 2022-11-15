import styled, { keyframes } from 'styled-components';

export const BounceAnimation = keyframes`
  0% {
    margin-bottom: 0;
  }

  50% {
    margin-bottom: 0.8rem;
  }

  100% {
    margin-bottom: 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-top: 20px;
  padding-left: 20px;
`;

export const Dot = styled.div`
  background-color: #fdba3c;
  border-radius: 50%;
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
