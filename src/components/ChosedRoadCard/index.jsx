import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faBookmark,
  faBookBookmark,
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
}) {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getFavorites(`${id}`);
    // console.log(isFavorite);
  }, []);

  let favExists;

  useEffect(() => {
    favExists = favorites.some((fav) => fav.id == `${id}`);
    console.log(`o ${id} card é favorito?? R: ` + favExists)
    setIsFavorite(favExists);
  }, [favorites]);

  let handleFav = () => {}

  const getFavorites = async (id) => {
    const res = await statisticsService.getFavoriteCoursesByUser(4);
    setFavorites(res.data);
  };

  const CheckFavorite = async (id, favExists) => {
    console.log(favExists)
    if (!favExists) {
      handleFav = statisticsService.addAFavoriteCourse;
    } else {
      handleFav = statisticsService.deleteFavoriteCourse;
    }
    await handleFav(4, `${id}`);
    console.log(favExists)
    setIsFavorite(!favExists);
  };

  return (
    <>
      <Container>
        <LeftBar />
        <FaContainer>
          <button
            onClick={
              () => CheckFavorite(id, favExists) /* () => SetFavorite(4, `${id}`) */
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
          <a /* target="_blank" href={link} */ onClick={() => setIsOpen(true)}>
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
