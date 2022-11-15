import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import { useEffect, useState } from 'react';

import { Wrapper } from '../Home/style';
import { Gradient, LinksContainer, Stats, Themes } from './style';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../RoadDev/style';
import { statisticsService } from '../../services/statisticsService';
import { adminStatistic } from '../../services/adminStatisticsService';
import { useContext } from 'react';
import { favContext } from '../../context/favoritesContext';

export function ContentIntro() {
  const [roadDev, setRoadDev] = useState([]);
  const [themeCounter, setThemeCounter] = useState([]);
  const { favorites } = useContext(favContext);

  useEffect(() => {
    getCourses();
    getFavorites();
    fetchCounterTheme();
  }, []);

  const fetchCounterTheme = async () => {
    try {
      let response = await adminStatistic.usersDoingATheme('Iniciando');
      setThemeCounter(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  async function getCourses() {
    await api
      .get('/courses/themes/iniciando')
      .then((response) => setRoadDev(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }

  function getFavorites() {
    const ids = roadDev.map((course) => course.id);
    const favoritesArray = ids.forEach((id) => GetFavorite(id));
    // const favoritesArray = await GetFavorite(ids)
    // setFavorites(favoritesArray.data.id);
  }

  const GetFavorite = statisticsService.getFavoriteCoursesByUser;

  return (
    <Wrapper>
      <LinksContainer>
        <a href="home">Home</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="/roaddev">Dev Full Stack</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">Iniciando</a>
      </LinksContainer>
      <Gradient>Iniciando</Gradient>
      <Stats>{themeCounter} pessoas estão estudando essa trilha</Stats>
      <Themes>Conteúdos - 00/30</Themes>
      <ContainerTheme>
        {roadDev.map((card, index) => (
          <ChosedRoadCard
            id={card.id}
            title={card.title}
            idType={card.idType}
            time={card.time}
            idTheme={card.idTheme}
            idRoad={card.idRoad}
            link={card.link}
            key={index}
            description={card.description}
            author={card.author}
            arrFav={favorites}
          />
        ))}
      </ContainerTheme>
    </Wrapper>
  );
}
