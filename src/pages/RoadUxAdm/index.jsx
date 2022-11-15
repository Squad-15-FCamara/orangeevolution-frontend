import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Wrapper } from '../Home/style';
import { ContainerTheme, LinksContainer, Stats } from '../RoadDev/style';
import { PageTitle } from '../SavedContent/style';
import { InfoContainer } from './style';
import { useEffect, useState } from 'react';
import { RoadStatistics } from '../../components/RoadStatistics';
import { adminStatistic } from '../../services/adminStatisticsService';
import { Loading } from '../../components/Loading';

export function RoadUxAdm() {
  const [getStats, setGetStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      let response = await adminStatistic.usersStatsByRoad('UX UI Design');
      setGetStats(response.data);
      setIsLoading(false);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  return (
    <Wrapper>
      <LinksContainer>
        <a href="#">Trilhas</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">Temas</a>
      </LinksContainer>
      <PageTitle>Estatísticas</PageTitle>
      <Stats>Confira aqui as estatísticas de acesso</Stats>
      <InfoContainer>
        <h2>Tema</h2>
        <span>|</span>
        <h2>Acessos</h2>
        <span>|</span>
        <h2>Concluídos</h2>
        <span>|</span>
        <h2>Não Acessado</h2>
      </InfoContainer>
      <ContainerTheme>
        {isLoading ? (
          <Loading />
        ) : (
          getStats.map((card, index) => (
            <RoadStatistics
              idRoad={card.idRoad}
              name={card.name}
              doing={card.doing}
              done={card.done}
              didnt={card.didnt}
              key={index}
            />
          ))
        )}
      </ContainerTheme>
    </Wrapper>
  );
}
