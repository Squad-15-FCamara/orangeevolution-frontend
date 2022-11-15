import { Link } from 'react-router-dom';
import { Card } from '../../pages/Home/style';
import { Wrapper, LinkStyled } from './style';
import DevCard from '../../assets/img/newDevCard.svg';
import UxCard from '../../assets/img/newUxCard.svg';
import QaCard from '../../assets/img/newQaCard.svg';
import SoftCard from '../../assets/img/newSoftCard.svg';

export function RoadCard() {
  return (
    <Wrapper>
      <LinkStyled to={'/roaddev/'}>
        <Card src={DevCard} />
      </LinkStyled>
      <LinkStyled to={'/roadux/'}>
        <Card src={UxCard} />
      </LinkStyled>
      <LinkStyled to={'/roadqa/'}>
        <Card src={QaCard} />
      </LinkStyled>
      <LinkStyled to={'/roadsoft/'}>
        <Card src={SoftCard} />
      </LinkStyled>
    </Wrapper>
  );
}
