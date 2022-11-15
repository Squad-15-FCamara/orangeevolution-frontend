import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Container, LeftBar, TextContainer, Theme } from './style';

export function RoadTheme({ idRoad, theme, link }) {
  return (
    <Container idRoad={idRoad}>
      <LeftBar idRoad={idRoad} />
      <TextContainer>
        <Theme>{theme}</Theme>
        <a href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </TextContainer>
    </Container>
  );
}
