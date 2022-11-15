import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faBookmark
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  LeftBar,
  Title,
  FaContainer,
  ModalContentCard,
} from './style';
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
import { useEffect } from 'react';

export function ChosedRoadCard({
  id,
  title,
  idType,
  time,
  idTheme,
  idRoad,
  link,
  author,
  description,
  arrFav
}) {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFavorites(arrFav);
    console.log(arrFav)
  }, []);

  let favExists;

  useEffect(() => {
    favExists = favorites.some((fav) => fav.id == `${id}`);
    setIsFavorite(favExists);
  }, [favorites]);

  let handleFav = () => {};

  const CheckFavorite = async (id, isFav) => {
    if (!isFav) {
      handleFav = statisticsService.addAFavoriteCourse;
    } else {
      handleFav = statisticsService.deleteFavoriteCourse;
    }
    await handleFav(4, `${id}`);
    setIsFavorite(!isFav);
  };

  return (
    <>
      <Container idRoad={idRoad}>
        <LeftBar idRoad={idRoad} />
        <FaContainer idRoad={idRoad}>
          <button
            onClick={
              () =>
                CheckFavorite(
                  id,
                  isFavorite,
                )
            }
          >
            <FontAwesomeIcon
              id="changeColor"
              icon={faBookmark}
              fa-3x="true"
              size="2x"
              color={isFavorite ? '#36357E' : 'white'}
            />
          </button>
        </FaContainer>
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
          <a onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
          </a>
        </FaContainer>
      </Container>
      {isOpen && (
        <ModalContentCard
          id={id}
          title={title}
          time={time}
          idRoad={idRoad}
          idType={idType}
          description={description}
          author={author}
          setIsOpen={setIsOpen}
          link={link}
        />
      )}
    </>
  );
}
