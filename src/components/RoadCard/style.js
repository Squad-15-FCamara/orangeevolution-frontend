import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 910px; */
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LinkStyled = styled(Link)`
  @media screen and (max-width: 900px) {
    /* width: 150px; */
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
  }
`;
