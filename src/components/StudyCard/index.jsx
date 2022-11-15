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
    <Card idRoad={idRoad}>
      <Paint idRoad={idRoad} />
      <TextContainer idRoad={idRoad}>
        <Title>{title}</Title>
        <TypeContainer>
          <Type idRoad={idRoad}>{idType}</Type>
          <Duration>{time}min</Duration>
        </TypeContainer>
        <Theme>{idTheme}</Theme>
        <Road>{idRoad}</Road>
      </TextContainer>
      <FaContainer idRoad={idRoad}>
        <a target="_blank" href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </FaContainer>
    </Card>
  );
}
