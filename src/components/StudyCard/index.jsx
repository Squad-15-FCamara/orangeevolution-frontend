import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {
  Card,
  Title,
  Type,
  Duration,
  Theme,
  Road,
  TypeContainer,
  Paint,
  TextContainer,
  FaContainer,
} from './style';

export function StudyCard({ title, idType, time, idTheme, idRoad, link }) {
  return (
    <Card>
      <Paint />
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
        <a target="_blank" href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </FaContainer>
    </Card>
  );
}
