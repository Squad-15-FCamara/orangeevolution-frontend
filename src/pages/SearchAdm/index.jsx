import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Context } from '../../context/context';
import api from '../../services/api';
import { ContainerTheme } from '../RoadDev/style';
import { Wrapper, Title } from './style';
import { adminStatistic } from '../../services/adminStatisticsService';
import { SearchStatistics } from '../../components/SearchStatistics';
import { InfoContainer } from '../IntroStatistics/style';
import { Loading } from '../../components/Loading';

export function SearchAdm() {
  const [fetchResults, setFetchResults] = useState([]);
  const { inputSearch } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!inputSearch == '') {
      fetching();
    }
    if (inputSearch === '') {
      setFetchResults([]);
    }
  }, [inputSearch]);

  const fetching = async () => {
    try {
      let response = await adminStatistic.getStatsBySearchByTitle(inputSearch);
      setFetchResults(response.data);
      setIsLoading(false);
    } catch (e) {
      console.error('Ops! Ocorreu um erro: ' + e);
    }
  };

  return (
    <Wrapper>
      <Title> Resultados da busca "{inputSearch}"</Title>
      {fetchResults.length === 0 && (
        <h3>
          Não encontramos resultado para sua busca de "{inputSearch}". Tente
          novamente
        </h3>
      )}

      {console.log(fetchResults)}

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
          fetchResults.map((card, index) => {
            return (
              <SearchStatistics
                idRoad={card.idRoad}
                name={card.name}
                doing={card.doing}
                done={card.done}
                didnt={card.didnt}
                key={index}
              />
            );
          })
        )}
      </ContainerTheme>
    </Wrapper>
  );
}
