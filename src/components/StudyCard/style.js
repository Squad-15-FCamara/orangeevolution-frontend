import styled from 'styled-components';

export const Card = styled.div`
  width: 90%;
  height: 100px;
  border: 1px solid #4140bf;
  border-radius: 20px;
  display: flex;
`;

export const Paint = styled.aside`
  background-color: #4140bf;
  height: 100px;
  width: 20px;
  border-radius: 20px 0 0 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: 16px;
  background-color: #e2e2ff;
  width: 80%;
`;

export const FaContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e2e2ff;
  width: 12%;
  border-radius: 0px 20px 20px 0px;
  a {
    color: inherit;
    &:visited {
      color: inherit;
    }
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 1rem;
  display: block;
  width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Type = styled.div`
  height: 21px;
  background-color: #4140bf;
  border-radius: 4px;
  padding: 2px;
  color: #fbfbfb;
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`;

export const Duration = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
`;

export const Theme = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
`;

export const Road = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
`;
