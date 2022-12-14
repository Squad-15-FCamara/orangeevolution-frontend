import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBookmark } from '@fortawesome/free-solid-svg-icons';

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
import { useContext } from 'react';
import { favContext } from '../../context/favoritesContext';

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
  arrFav,
}) {
  const [favs, setFavs] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { favorites, setFavorites } = useContext(favContext);

  useEffect(() => {
    setFavs(arrFav);
  }, []);

  useEffect(() => {
    let favExists = favs.some((fav) => fav.id == `${id}`);
    setIsFavorite(favExists);
  }, [favs]);

  const toggleFavorite = async (id, isFav) => {
    if (!isFav) {
      let response = await statisticsService.addAFavoriteCourse(4, id);
      setFavorites((oldState) => {
        return [...oldState, response.data]
      })
    } else {
      await statisticsService.deleteFavoriteCourse(4, id);
      setFavorites((oldState) => {
        return oldState.filter(card => card.id !== id)
      })
    }
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
                toggleFavorite(
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
