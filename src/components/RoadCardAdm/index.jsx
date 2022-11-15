import { Link } from 'react-router-dom';
import { Card } from '../../pages/Home/style';
import { Wrapper } from './style';
import DevCard from '../../assets/img/newDevCard.svg';
import UxCard from '../../assets/img/newUxCard.svg';
import QaCard from '../../assets/img/newQaCard.svg';
import SoftCard from '../../assets/img/newSoftCard.svg';

export function RoadCardAdm() {
  return (
    <Wrapper>
      <Link to={'/roaddevadm/'}>
        <Card src={DevCard} />
      </Link>
      <Link to={'/roaduxadm/'}>
        <Card src={UxCard} />
      </Link>
      <Link to={'/roadqaadm/'}>
        <Card src={QaCard} />
      </Link>
      <Link to={'/roadsoftadm/'}>
        <Card src={SoftCard} />
      </Link>
    </Wrapper>
  );
}
