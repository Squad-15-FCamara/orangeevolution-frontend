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

export function StudyCard({ title, type, time, theme, road, link }) {
  return (
    <Card>
      <Paint />
      <TextContainer>
        <Title>{title}</Title>
        <TypeContainer>
          <Type>{type}</Type>
          <Duration>{time}min</Duration>
        </TypeContainer>
        <Theme>{theme}</Theme>
        <Road>{road}</Road>
      </TextContainer>
      <FaContainer>
        <a href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </FaContainer>
    </Card>
  );
}
