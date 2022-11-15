import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import { useEffect, useState } from 'react';

import { Wrapper } from '../Home/style';
import { Gradient, LinksContainer, Stats, Themes } from '../ContentIntro/style';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../RoadDev/style';
import { adminStatistic } from '../../services/adminStatisticsService';

export function UiContent() {
  const [roadUi, setRoadUi] = useState([]);
  const [themeCounter, setThemeCounter] = useState([]);

  useEffect(() => {
    getCourses();
    fetchCounterTheme();
  }, []);

  async function getCourses() {
    await api
      .get('/courses/themes/Fundamentos%20de%20UI')
      .then((response) => setRoadUi(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    [];
  }

  const fetchCounterTheme = async () => {
    try {
      let response = await adminStatistic.usersDoingATheme('Fundamentos de UI');
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
        <a href="/roadux">UX/UI Design</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">Fundamentos de UI</a>
      </LinksContainer>
      <Gradient>Fundamentos de UI</Gradient>
      <Stats>{themeCounter} pessoas estão estudando essa trilha</Stats>
      <Themes>Conteúdos - 00/30</Themes>
      <ContainerTheme>
        {roadUi.map((card, index) => (
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
