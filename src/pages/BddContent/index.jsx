import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import { useEffect, useState } from 'react';

import { Wrapper } from '../Home/style';
import { Gradient, LinksContainer, Stats, Themes } from '../ContentIntro/style';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../RoadDev/style';
import { adminStatistic } from '../../services/adminStatisticsService';

export function BddContent() {
  const [roadBdd, setRoadBdd] = useState([]);
  const [themeCounter, setThemeCounter] = useState([]);

  useEffect(() => {
    getCourses();
    fetchCounterTheme();
  }, []);

  async function getCourses() {
    await api
      .get('/courses/themes/bdd')
      .then((response) => setRoadBdd(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    [];
  }

  const fetchCounterTheme = async () => {
    try {
      let response = await adminStatistic.usersDoingATheme('Bdd');
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
        <a href="/roadqa">Quality Assurance QA</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">BDD</a>
      </LinksContainer>
      <Gradient>BDD</Gradient>
      <Stats>{themeCounter} pessoas estão estudando essa trilha</Stats>
      <Themes>Conteúdos - 00/30</Themes>
      <ContainerTheme>
        {roadBdd.map((card, index) => (
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
          />
        ))}
      </ContainerTheme>
    </Wrapper>
  );
}
