import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  border: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '1px solid #4140bf') ||
    (idRoad == 'UX UI Design' && '1px solid #dc3cc2') ||
    (idRoad == 'Quality Assurance QA' && '1px solid #36aa4b') ||
    (idRoad == 'Soft Skills' && '1px solid #c8bf0d') ||
    '1px solid #000'};
  border-radius: 20px;
  background-color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '#e2e2ff') ||
    (idRoad == 'UX UI Design' && '#FFE9FB') ||
    (idRoad == 'Quality Assurance QA' && '#D2F1D9') ||
    (idRoad == 'Soft Skills' && '#FFFDD2') ||
    '#000'};
  display: flex;
`;

export const LeftBar = styled.div`
  background-color: ${({ idRoad }) =>
    (idRoad == 'FullStack' && '1px solid #4140bf') ||
    (idRoad == 'UX UI Design' && '1px solid #dc3cc2') ||
    (idRoad == 'Quality Assurance QA' && '1px solid #36aa4b') ||
    (idRoad == 'Soft Skills' && '1px solid #c8bf0d') ||
    '1px solid #000'};
  width: 20px;
  height: 100px;
  border-radius: 20px 0px 0px 20px;
`;

export const TextContainer = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Theme = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  padding-left: 21px;
  width: 100px;
  text-align: center;
  display: flex;
`;

export const ThemeName = styled(Theme)`
  width: 150px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 0px;
`;
