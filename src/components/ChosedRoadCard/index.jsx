import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBookmark } from '@fortawesome/free-solid-svg-icons';

import { Container, LeftBar, Title, FaContainer } from './style';
import {
  TextContainer,
  TypeContainer,
  Type,
  Duration,
  Theme,
  Road,
} from '../StudyCard/style';

export function ChosedRoadCard({ title, idType, time, idTheme, idRoad, link }) {
  return (
    <Container>
      <LeftBar />
      <FaContainer>
        <button>
          <FontAwesomeIcon
            id="changeColor"
            icon={faBookmark}
            fa-3x="true"
            size="2x"
          />
        </button>
      </FaContainer>
      <TextContainer>
        <Title>{title}</Title>
        <TypeContainer>
          <Type>{idType}</Type>
          <Duration>{time}min</Duration>
        </TypeContainer>
        <Theme>{idTheme}</Theme>
        <Road>{idRoad}</Road>
      </TextContainer>
      <FaContainer>
        <a href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </FaContainer>
    </Container>
  );
}
