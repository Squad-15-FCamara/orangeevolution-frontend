import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Wrapper } from '../Home/style';
import { ContainerTheme, LinksContainer, Stats } from '../RoadDev/style';
import { PageTitle } from '../SavedContent/style';
import { InfoContainer } from './style';
import { useEffect, useState } from 'react';
import { adminStatistic } from '../../services/adminStatisticsService';
import { ContentStatisticsAdm } from '../../components/ContentStatisticsAdm';

export function FullStatistics() {
  const [getStats, setGetStats] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      let response = await adminStatistic.usersStatsByTheme('FullStack');
      setGetStats(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  return (
    <Wrapper>
      <LinksContainer>
        <a href="#">Trilhas</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="/statisticsadm">Temas</a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href="#">Conteúdos</a>
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
        {getStats.map((card, index) => (
          <ContentStatisticsAdm
            name={card.name}
            doing={card.doing}
            done={card.done}
            didnt={card.didnt}
            key={index}
          />
        ))}
      </ContainerTheme>
    </Wrapper>
  );
}