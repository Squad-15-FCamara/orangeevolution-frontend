import { Link } from 'react-router-dom';
import { Button, Wrapper } from './style';

export function RoadCard() {
  return (
    <Wrapper>
      <Link to={'/roaddev/'}>
        <Button imgRoad="url(./cardDev.svg)"></Button>
      </Link>
      <Link to={'/roadux/'}>
        <Button imgRoad="url(./cardUx.svg)"></Button>
      </Link>
      <Link to={'/roadqa/'}>
        <Button imgRoad="url(./cardQa.svg)"></Button>
      </Link>
      <Link to={'/roadsoft/'}>
        <Button imgRoad="url(./cardSoft.svg)"></Button>
      </Link>
    </Wrapper>
  );
}
