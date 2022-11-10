import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Container, LeftBar, TextContainer, Theme } from './style';

export function RoadTheme({ theme, link }) {
  return (
    <Container>
      <LeftBar />
      <TextContainer>
        <Theme>{theme}</Theme>
        <a href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </TextContainer>
    </Container>
  );
}
