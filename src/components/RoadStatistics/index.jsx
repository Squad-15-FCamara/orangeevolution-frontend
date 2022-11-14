import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  LeftBar,
  TextContainer,
  Theme,
} from '../../components/RoadTheme/style';

export function RoadStatistics({
  theme,
  access,
  concluded,
  notAccessed,
  link,
}) {
  return (
    <Container>
      <LeftBar />
      <TextContainer>
        <Theme>{theme}</Theme>
        <Theme>{access}</Theme>
        <Theme>{concluded}</Theme>
        <Theme>{notAccessed}</Theme>
        <a href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </TextContainer>
    </Container>
  );
}
