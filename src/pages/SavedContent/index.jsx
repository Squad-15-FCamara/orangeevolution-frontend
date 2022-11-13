import { useState, useEffect } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from './style';
import { statisticsService } from '../../services/statisticsService';
import { adminService } from '../../services/adminService';
import { ALL_ROADS } from './roads';

export function SavedContent() {
  const [favCourses, setFavCourses] = useState([]);
  const [allFavCourses, setAllFavCourses] = useState([]);
  const [allRoads, setAllRoads] = useState([]);
  const [clicked, setClicked] = useState('Tudo');
  
  useEffect(() => {
    fetchInitialCoursesState()
  }, []);

  const fetchInitialCoursesState = async () => {
    try {
      let response = await statisticsService.getFavoriteCoursesByUser(4);
      setAllFavCourses(response.data);
      setFavCourses(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e)
    }
  }

  const handleClick = async (title) => {
    setClicked(title)
    if (!favCourses) return console.error('não há cursos favoritos!');
    if (title === "Tudo") {
      return setFavCourses(allFavCourses);
    }
    const filteredContent = allFavCourses.filter(item => item.idRoad.includes(title));
    setFavCourses(filteredContent);
  }

  return (
    <Wrapper>
      <PageTitle>Salvos</PageTitle>
      <Stats>Acesse aqui seus conteúdos salvos</Stats>
      <FilterContainer>
        {ALL_ROADS.map((item, index) => <ButtonS key={index} clicked={item.title === clicked} onClick={() => handleClick(item.title)} >{item.title}</ButtonS>)}
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
