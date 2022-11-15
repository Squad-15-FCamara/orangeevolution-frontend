import { useState, useEffect, useContext } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from './style';
import { ALL_ROADS } from './roads';
import { favContext } from '../../context/favoritesContext';
import { Loading } from '../../components/Loading';

export function SavedContent() {
  const [favCourses, setFavCourses] = useState([]);
  const [clicked, setClicked] = useState('Tudo');
  const { favorites } = useContext(favContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setFavCourses(favorites);
    setIsLoading(false);
  }, []);

  const handleClick = async (title) => {
    setIsLoading(true)
    setClicked(title)
    if (!favorites) return console.error('não há cursos favoritos!');
    if (title === "Tudo") {
      setIsLoading(false)
      return setFavCourses(favorites);
    }
    const filteredContent = favorites.filter(item => item.idRoad.includes(title));
    setFavCourses(filteredContent);
    setIsLoading(false);
  }

  return (
    <Wrapper>
      <PageTitle>Salvos</PageTitle>
      <Stats>Acesse aqui seus conteúdos salvos</Stats>
      <FilterContainer>
        {ALL_ROADS.map((item, index) => (
          <ButtonS
            key={index}
            clicked={item.title === clicked}
            onClick={() => handleClick(item.title)}
          >
            {item.title}
          </ButtonS>
        ))}
      </FilterContainer>
      <ContainerTheme>
        {isLoading ? (
          <Loading />
        ) : favCourses ? (
          favCourses.map((card) => (
            <ChosedRoadCard
              id={card.id}
              title={card.title}
              idType={card.idType}
              time={card.time}
              idTheme={card.idTheme}
              idRoad={card.idRoad}
              link={card.link}
              key={card.id}
              arrFav={favorites}
            />
          ))
        ) : (
          <h1>Você ainda não tem curso salvo!</h1>
        )}
      </ContainerTheme>
    </Wrapper>
  );
}
