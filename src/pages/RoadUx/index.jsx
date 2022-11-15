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

export function RoadUx() {
  const [roadUx, setRoadUx] = useState([]);
  const [roadCounter, setRoadCounter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get('/courses/roads/UX%20UI%20Design')
      .then((response) => setRoadUx(response.data))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    fetchCounterRoad();
  }, []);

  const fetchCounterRoad = async () => {
    try {
      let response = await adminStatistic.usersDoingARoad('UX UI Design');
      setRoadCounter(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  const theme1 = {
    idRoad: 'UX UI Design',
    theme: 'Fundamentos de UX',
    link: '/uxcontent',
  };
  const theme2 = {
    idRoad: 'UX UI Design',
    theme: 'Fundamentos de UI',
    link: '/uicontent',
  };
  const theme3 = {
    idRoad: 'UX UI Design',
    theme: 'Opcional',
    link: '/optionaluxcontent',
  };

  return (
    <Wrapper>
      <LinksContainer>
        <a href="../home">Home</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">UX/UI Design</a>
      </LinksContainer>
      <Gradient>UX/UI Design</Gradient>
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
