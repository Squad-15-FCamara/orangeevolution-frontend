import { Wrapper } from '../Home/style';
import { ContainerTheme, LinksContainer, Stats } from '../RoadDev/style';
import { PageTitle } from '../SavedContent/style';
import { InfoContainer } from './style';
import { useEffect, useState } from 'react';
import { adminService } from '../../services/adminService';
import { RoadStatistics } from '../../components/RoadStatistics';

export function StatisticsAdm() {
  const [getTheme, setGetTheme] = useState([]);

  useEffect(() => {
    fetchThemes();
  }, []);

  const fetchThemes = async () => {
    try {
      let response = await adminService.getAllThemesName();
      setGetTheme(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  return (
    <Wrapper>
      <LinksContainer>
        <a href="#">Trilhas</a>
      </LinksContainer>
      <PageTitle>Estatísticas</PageTitle>
      <Stats>Confira aqui as estatísticas de acesso</Stats>
      <InfoContainer>
        <h2>Trilha</h2>
        <span>|</span>
        <h2>Acessos</h2>
        <span>|</span>
        <h2>Concluídos</h2>
        <span>|</span>
        <h2>Não Acessado</h2>
      </InfoContainer>
      <ContainerTheme>
        {getTheme.map((theme, index) => (
          <RoadStatistics theme={theme} key={index} />
        ))}
      </ContainerTheme>
    </Wrapper>
  );
}
