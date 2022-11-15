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
import { adminStatistic } from '../../services/adminStatisticsService';

export function RoadQa() {
  const [roadQa, setRoadQa] = useState([]);
  const [roadCounter, setRoadCounter] = useState([]);

  useEffect(() => {
    api
      .get('/courses/roads/Quality%20Assurance%20QA')
      .then((response) => setRoadQa(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    fetchCounterRoad();
  }, []);

  const fetchCounterRoad = async () => {
    try {
      let response = await adminStatistic.usersDoingARoad(
        'Quality Assurance QA',
      );
      setRoadCounter(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  const theme1 = { theme: 'Testes Automatizados', link: '/testescontent' };
  const theme2 = { theme: 'BDD', link: '/bddcontent' };
  const theme3 = { theme: 'Qualidade', link: '/qualitycontent' };

  return (
    <Wrapper>
      <LinksContainer>
        <a href="../home">Home</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">Quality Assurance QA</a>
      </LinksContainer>
      <Gradient>Quality Assurance QA</Gradient>
      <Stats>{roadCounter} pessoas estão estudando essa trilha</Stats>
      <Themes>Temas - 00/03</Themes>
      <ContainerTheme>
        <RoadTheme theme={theme1.theme} link={theme1.link} />
        <RoadTheme theme={theme2.theme} link={theme2.link} />
        <RoadTheme theme={theme3.theme} link={theme3.link} />
      </ContainerTheme>
    </Wrapper>
  );
}
