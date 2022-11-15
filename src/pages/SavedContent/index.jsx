import { useState, useEffect, useContext } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from './style';
import { statisticsService } from '../../services/statisticsService';
import { adminService } from '../../services/adminService';
import { ALL_ROADS } from './roads';
import { favContext } from '../../context/favoritesContext';
import { Loading } from '../../components/Loading';

export function SavedContent() {
  const [favCourses, setFavCourses] = useState([]);
  const [allFavCourses, setAllFavCourses] = useState([]);
  const [allRoads, setAllRoads] = useState([]);
  const [clicked, setClicked] = useState('Tudo');
  const { favorites } = useContext(favContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchInitialCoursesState();
  }, []);

  const fetchInitialCoursesState = async () => {
    try {
      let response = await statisticsService.getFavoriteCoursesByUser(4);
      setAllFavCourses(response.data);
      setFavCourses(response.data);
      setIsLoading(false);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  const handleClick = async (title) => {
    setClicked(title);
    if (!favCourses) return console.error('não há cursos favoritos!');
    if (title === 'Tudo') {
      return setFavCourses(allFavCourses);
    }
    const filteredContent = allFavCourses.filter((item) =>
      item.idRoad.includes(title),
    );
    setFavCourses(filteredContent);
  };

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
              arrFav={
                favorites
                  ? favorites
                  : console.log(
                      'tem nada aqui nao chefe kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                    )
              }
            />
          ))
        ) : (
          <h1>Você ainda não tem curso salvo!</h1>
        )}
      </ContainerTheme>
    </Wrapper>
  );
}
