import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import { useEffect, useState } from 'react';

import { Wrapper } from '../Home/style';
import { Gradient, LinksContainer, Stats, Themes } from '../ContentIntro/style';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../RoadDev/style';

export function ContentFull() {
  const [roadDev, setRoadDev] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    await api
      .get('/courses/themes/fullstack')
      .then((response) => setRoadDev(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    [];
  }

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
      <Stats>xxx pessoas estão estudando essa trilha</Stats>
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
          />
        ))}
      </ContainerTheme>
    </Wrapper>
  );
}
