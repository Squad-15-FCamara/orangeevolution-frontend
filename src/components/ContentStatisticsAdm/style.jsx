import styled from 'styled-components';

export const Theme = styled.h2`
  font-weight: 600;
  font-size: 1.25rem;
  padding-left: 21px;
  width: 50px;
  text-align: center;
`;

export const ThemeTitle = styled(Theme)`
  font-size: 1rem;
  width: 160px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
