import { Link } from 'react-router-dom';
import { Card } from '../../pages/Home/style';
import { Wrapper } from './style';
import DevCard from '../../assets/img/newDevCard.svg';
import UxCard from '../../assets/img/newUxCard.svg';
import QaCard from '../../assets/img/newQaCard.svg';
import SoftCard from '../../assets/img/newSoftCard.svg';

export function RoadCard() {
  return (
    <Wrapper>
      <Link to={'/roaddev/'}>
        <Card src={DevCard} />
      </Link>
      <Link to={'/roadux/'}>
        <Card src={UxCard} />
      </Link>
      <Link to={'/roadqa/'}>
        <Card src={QaCard} />
      </Link>
      <Link to={'/roadsoft/'}>
        <Card src={SoftCard} />
      </Link>
    </Wrapper>
  );
}
