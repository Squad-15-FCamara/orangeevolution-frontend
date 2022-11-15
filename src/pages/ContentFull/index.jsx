import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import { useContext, useEffect, useState } from 'react';

import { Wrapper } from '../Home/style';
import { Gradient, LinksContainer, Stats, Themes } from '../ContentIntro/style';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../RoadDev/style';
import { adminStatistic } from '../../services/adminStatisticsService';
import { favContext } from '../../context/favoritesContext';
import { Loading } from '../../components/Loading';

export function ContentFull() {
  const [roadDev, setRoadDev] = useState([]);
  const [themeCounter, setThemeCounter] = useState([]);
  const { favorites } = useContext(favContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCourses();
    fetchCounterTheme();
  }, []);

  async function getCourses() {
    await api
      .get('/courses/themes/fullstack')
      .then((response) => setRoadDev(response.data))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    [];
  }

  const fetchCounterTheme = async () => {
    try {
      let response = await adminStatistic.usersDoingATheme('FullStack');
      setThemeCounter(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  return (
    <Wrapper>
      <LinksContainer>
        <a href="home">Home</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="/roaddev">Dev Full Stack</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">Full Stack</a>
      </LinksContainer>
      <Gradient>Full Stack</Gradient>
      <Stats>{themeCounter} pessoas estão estudando essa trilha</Stats>
      <Themes>Conteúdos - 00/30</Themes>
      <ContainerTheme>
        {isLoading ? (
          <Loading />
        ) : (
          roadDev.map((card, index) => (
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
          ))
        )}
      </ContainerTheme>
    </Wrapper>
  );
}
