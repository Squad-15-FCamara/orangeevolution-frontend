import styled from 'styled-components';

export const Card = styled.div`
  min-width: 250px;
  width: 90%;
  height: 100px;
  border: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '1px solid #4140bf') ||
    (idRoad == 'UX UI Design' && '1px solid #dc3cc2') ||
    (idRoad == 'Quality Assurance QA' && '1px solid #36aa4b') ||
    (idRoad == 'Soft Skills' && '1px solid #c8bf0d') ||
    '1px solid #000'};
  border-radius: 20px;
  display: flex;
`;

export const Paint = styled.aside`
  background-color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '#4140bf') ||
    (idRoad == 'UX UI Design' && '#dc3cc2') ||
    (idRoad == 'Quality Assurance QA' && '#36aa4b') ||
    (idRoad == 'Soft Skills' && '#c8bf0d') ||
    '#000'};
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
  background-color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '#e2e2ff') ||
    (idRoad == 'UX UI Design' && '#FFE9FB') ||
    (idRoad == 'Quality Assurance QA' && '#D2F1D9') ||
    (idRoad == 'Soft Skills' && '#FFFDD2') ||
    '#000'};
  width: 80%;
`;

export const FaContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '#e2e2ff') ||
    (idRoad == 'UX UI Design' && '#FFE9FB') ||
    (idRoad == 'Quality Assurance QA' && '#D2F1D9') ||
    (idRoad == 'Soft Skills' && '#FFFDD2') ||
    '#000'};
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
  background-color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '#4140bf') ||
    (idRoad == 'UX UI Design' && '#dc3cc2') ||
    (idRoad == 'Quality Assurance QA' && '#36aa4b') ||
    (idRoad == 'Soft Skills' && '#c8bf0d') ||
    '#000'};
  border-radius: 4px;
  padding: 2px;
  color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '#e2e2ff') ||
    (idRoad == 'UX UI Design' && '#FFE9FB') ||
    (idRoad == 'Quality Assurance QA' && '#D2F1D9') ||
    (idRoad == 'Soft Skills' && '#FFFDD2') ||
    '#000'};
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
