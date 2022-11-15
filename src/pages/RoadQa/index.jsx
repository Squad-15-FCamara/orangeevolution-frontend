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
import { Loading } from '../../components/Loading';

export function RoadQa() {
  const [roadQa, setRoadQa] = useState([]);
  const [roadCounter, setRoadCounter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get('/courses/roads/Quality%20Assurance%20QA')
      .then((response) => setRoadQa(response.data))
      .then(() => setIsLoading(false))
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

  const theme1 = {
    idRoad: 'Quality Assurance QA',
    theme: 'Testes Automatizados',
    link: '/testescontent',
  };
  const theme2 = {
    idRoad: 'Quality Assurance QA',
    theme: 'BDD',
    link: '/bddcontent',
  };
  const theme3 = {
    idRoad: 'Quality Assurance QA',
    theme: 'Qualidade',
    link: '/qualitycontent',
  };

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
        {isLoading ? (
          <Loading />
        ) : (
          <RoadTheme
            idRoad={theme1.idRoad}
            theme={theme1.theme}
            link={theme1.link}
          />
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <RoadTheme
            idRoad={theme2.idRoad}
            theme={theme2.theme}
            link={theme2.link}
          />
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <RoadTheme
            idRoad={theme3.idRoad}
            theme={theme3.theme}
            link={theme3.link}
          />
        )}
      </ContainerTheme>
    </Wrapper>
  );
}
