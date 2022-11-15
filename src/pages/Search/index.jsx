import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { Context } from '../../context/context';
import { ContainerTheme } from '../RoadDev/style';
import { Wrapper, Title } from './style';
import { courseService } from '../../services/courseService';
import { favContext } from '../../context/favoritesContext';
import { Loading } from '../../components/Loading';

export function Search() {
  const [fetchResults, setFetchResults] = useState([]);
  const { inputSearch } = useContext(Context);
  const { favorites } = useContext(favContext);
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
      let response = await courseService.getCourseByTitle(inputSearch);
      setFetchResults(response.data);
      setIsLoading(false);
    } catch (e) {
      console.error('Ops! Ocorreu um erro: ' + e);
    }
  };

  return (
    <Wrapper>
      <Title> Resultados da busca "{inputSearch}"</Title>
      {fetchResults.length === 0 && <h3>Carregando...</h3>}

      {console.log(fetchResults)}

      <ContainerTheme>
        {isLoading ? (
          <Loading />
        ) : (
          fetchResults.map((course, index) => {
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
                arrFav={favorites}
              />
            );
          })
        )}
      </ContainerTheme>
    </Wrapper>
  );
}
