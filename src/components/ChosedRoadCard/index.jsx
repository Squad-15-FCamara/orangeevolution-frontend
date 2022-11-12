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

export function ChosedRoadCard({ id, title, idType, time, idTheme, idRoad, link, key }) {


  async function setFavorite() {
    await api
          .get(`/statistics/favorites/4/${id}`)
          .then(response => console.log(response.status))
          .catch(e => console.log(e))
  }


  return (
    <Container>
      <LeftBar />
      <FaContainer>
        <button onClick={setFavorite}>
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
