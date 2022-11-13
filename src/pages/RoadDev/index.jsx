import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';
import { useEffect, useState } from 'react';

import { Wrapper } from '../Home/style';
import {
  ContainerTheme,
  Gradient,
  LinksContainer,
  Stats,
  Themes,
} from './style';
import { RoadTheme } from '../../components/RoadTheme';

export function RoadDev() {
  const [roadDev, setRoadDev] = useState([]);

  useEffect(() => {
    api
      .get('/courses/roads/FullStack')
      .then((response) => setRoadDev(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  const theme1 = { theme: 'Introdução', link: '/contentintro' };
  const theme2 = { theme: 'Full Stack', link: '/contentfull' };

  return (
    <Wrapper>
      <LinksContainer>
        <a href="../home">Home</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">Dev Full Stack</a>
      </LinksContainer>
      <Gradient>Dev Full Stack</Gradient>
      <Stats>xxx pessoas estão estudando essa trilha</Stats>
      <Themes>Temas - 00/02</Themes>
      <ContainerTheme>
        <RoadTheme theme={theme1.theme} link={theme1.link} />
        <RoadTheme theme={theme2.theme} link={theme2.link} />
      </ContainerTheme>
    </Wrapper>
  );
}
