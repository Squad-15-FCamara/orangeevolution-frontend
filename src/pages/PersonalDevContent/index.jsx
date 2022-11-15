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

export function PersonalDevContent() {
  const [roadPersonal, setRoadPersonal] = useState([]);
  const [themeCounter, setThemeCounter] = useState([]);
  const { favorites } = useContext(favContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCourses();
    fetchCounterTheme();
  }, []);

  async function getCourses() {
    await api
      .get('/courses/themes/Desenvolvimento')
      .then((response) => setRoadPersonal(response.data))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    [];
  }

  const fetchCounterTheme = async () => {
    try {
      let response = await adminStatistic.usersDoingATheme('Desenvolvimento');
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
        <a href="/roadsoft">Soft Skills</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">Desenvolvimento</a>
      </LinksContainer>
      <Gradient>Desenvolvimento</Gradient>
      <Stats>{themeCounter} pessoas estão estudando essa trilha</Stats>
      <Themes>Conteúdos - 00/30</Themes>
      <ContainerTheme>
        {isLoading ? (
          <Loading />
        ) : (
          roadPersonal.map((card, index) => (
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
