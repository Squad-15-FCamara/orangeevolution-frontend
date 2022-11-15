import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  LeftBar,
  TextContainer,
} from '../../components/RoadTheme/style';
import { Theme } from './style';

export function RoadStatistics({ idRoad, name, doing, done, didnt, link }) {
  return (
    <Container idRoad={idRoad}>
      <LeftBar idRoad={idRoad} />
      <TextContainer>
        <Theme>{name}</Theme>
        <Theme>{doing}</Theme>
        <Theme>{done}</Theme>
        <Theme>{didnt}</Theme>
        <a href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </TextContainer>
    </Container>
  );
}
