import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { Context } from '../../context/context';
import api from '../../services/api';
import { ContainerTheme } from '../RoadDev/style';
import { Wrapper, Title } from './style';

export function Search() {
  const [fetchResults, setFetchResults] = useState([]);
  const { inputSearch } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!inputSearch == '') {
      fetching();
    }
    if (fetchResults) {
      setIsLoading(false);
    }
    if (inputSearch === '') {
      setFetchResults([]);
    }
  }, [inputSearch]);

  const fetching = async () => {
    const response = await api
      .get(`/courses/titles/${inputSearch}`)
      .then((response) => setFetchResults(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });

    return response;
  };

  if (isLoading) {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          color: 'black',
          zIndex: '99999',
        }}
      >
        Loading...
      </div>
    );
  }

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

      <ContainerTheme>
        {fetchResults.map((course, index) => {
          return (
            <ChosedRoadCard
              id={course.id}
              title={course.title}
              idType={course.idType}
              time={course.time}
              idTheme={course.idTheme}
              idRoad={course.idRoad}
              link={course.link}
              key={index}
            />
          );
        })}
      </ContainerTheme>
    </Wrapper>
  );
}
