import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBookmark } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';

import { Container, LeftBar, Title, FaContainer, ModalContentCard } from './style';
import {
  TextContainer,
  TypeContainer,
  Type,
  Duration,
  Theme,
  Road,
} from '../StudyCard/style';

import { statisticsService } from '../../services/statisticsService';
import { useState } from 'react';

export function ChosedRoadCard({ id, title, idType, time, idTheme, idRoad, link, author, description }) {

  const [isOpen, setIsOpen] = useState(false)
  const SetFavorite = statisticsService.addAFavoriteCourse

  return (
    <>
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
        <a /* target="_blank" href={link} */ onClick={()=> setIsOpen(true)} >
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </a>
      </FaContainer>
    </Container>
    {isOpen && <ModalContentCard
     title={title}
     time={time}
     idRoad={idRoad}
     idType={idType}
     description={description}
     author={author}
     setIsOpen={setIsOpen}
     link={link} />}
    </>
  );
}
