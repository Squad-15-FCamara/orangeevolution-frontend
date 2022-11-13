import { useState, useEffect } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from './style';
import { statisticsService } from '../../services/statisticsService';
import { adminServices } from '../../services/adminServices';
import { ALL_ROADS } from './roads';

export function SavedContent() {
  const [favCourses, setFavCourses] = useState([]);
  const [allFavCourses, setAllFavCourses] = useState([]);

  useEffect(() => {
    fetchInitialCoursesState()
  }, []);

  const fetchInitialCoursesState = async() => {
    let response = await statisticsService.getFavoriteCoursesByUser(4);
    setAllFavCourses(response.data);
    setFavCourses(response.data)
  }

  const filterCourses = async (title) => {
    if (!favCourses) return console.error('não há cursos favoritos!');
    if (title === "Tudo") {
      return setFavCourses(allFavCourses);
    }
    const filteredContent = allFavCourses.filter(item => item.idTheme.includes(title));
    setFavCourses(filteredContent);
  }

  return (
    <Wrapper>
      <PageTitle>Salvos</PageTitle>
      <Stats>Acesse aqui seus conteúdos salvos</Stats>
      <FilterContainer>
        {ALL_ROADS.map((item, index) => <ButtonS key={index} onClick={() => filterCourses(item)} >{item}</ButtonS>)}
      </FilterContainer>
      <ContainerTheme>
        {favCourses ? favCourses.map((card, index) => (
          <ChosedRoadCard
            id={card.id}
            title={card.title}
            idType={card.idType}
            time={card.time}
            idTheme={card.idTheme}
            idRoad={card.idRoad}
            link={card.link}
            key={index}
          />
        )) : <h1>Você ainda não tem curso salvo!</h1>}
      </ContainerTheme>
    </Wrapper>
  );
}