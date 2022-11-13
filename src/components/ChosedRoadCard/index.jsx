import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBookmark } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';

import { Container, LeftBar, Title, FaContainer } from './style';
import {
  TextContainer,
  TypeContainer,
  Type,
  Duration,
  Theme,
  Road,
} from '../StudyCard/style';

import { statisticsService } from '../../services/statisticsService';

export function ChosedRoadCard({
  id,
  title,
  idType,
  time,
  idTheme,
  idRoad,
  link,
}) {
  const SetFavorite = statisticsService.addAFavoriteCourse;

  return (
    <Container>
      <LeftBar />
      <FaContainer>
        <button onClick={() => SetFavorite(4, `${id}`)}>
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
        <a target="_blank" href={link}>
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </FaContainer>
    </Container>
  );
}
