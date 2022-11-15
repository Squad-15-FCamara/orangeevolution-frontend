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

export function RoadSoft() {
  const [roadSoft, setRoadSoft] = useState([]);
  const [roadCounter, setRoadCounter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get('/courses/roads/Soft%20Skills')
      .then((response) => setRoadSoft(response.data))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    fetchCounterRoad();
  }, []);

  const fetchCounterRoad = async () => {
    try {
      let response = await adminStatistic.usersDoingARoad('Soft Skills');
      setRoadCounter(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  const theme1 = {
    idRoad: 'Soft Skills',
    theme: 'Desenvolvimento',
    link: '/personalcontent',
  };
  const theme2 = {
    idRoad: 'Soft Skills',
    theme: 'Trabalho em Equipe',
    link: '/teamcontent',
  };

  return (
    <Wrapper>
      <LinksContainer>
        <a href="../home">Home</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">Soft Skills</a>
      </LinksContainer>
      <Gradient>Soft Skills</Gradient>
      <Stats>{roadCounter} pessoas estão estudando essa trilha</Stats>
      <Themes>Temas - 00/02</Themes>
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
      </ContainerTheme>
    </Wrapper>
  );
}
