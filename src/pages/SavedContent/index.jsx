import { useState, useEffect } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from './style';
import { statisticsService } from '../../services/statisticsService';
import { courseService } from '../../services/courseService'

export function SavedContent() {
  const [filtered, setFiltered] = useState([]);
  const [favThemes, setFavThemes] = useState([]);

  useEffect(() => {
    fetchInitialCoursesState()
  }, []);

  const fetchInitialCoursesState = async() => {
    let response = await statisticsService.getFavoriteCoursesByUser(4);
    setFiltered(response.data);
    setFavThemes(response.data.idTheme);
    favThemes.unshift('Tudo')
    console.log(favThemes)
  }

  const fetchCourses = async (title) => {
    // let response = await courseService.getAllCourses();
    let response = await statisticsService.getFavoriteCoursesByUser(4);
    if (title === "Tudo" || title === "") {
      return setFiltered(response.data);
    }
    setFavThemes(response.data.idTheme);
    const filteredContent = response.data.filter(item => item.idTheme.includes(title));
    setFiltered(filteredContent);
  }

  return (
    <Wrapper>
      <PageTitle>Salvos</PageTitle>
      <Stats>Acesse aqui seus conteúdos salvos</Stats>
      <FilterContainer>
        {favThemes ? favThemes.map((item, index) => <ButtonS key={index} onClick={() => fetchCourses(item)} >{item}</ButtonS>) : <h1>non ecsiste</h1>}
      </FilterContainer>
      <ContainerTheme>
        {filtered ? filtered.map((card, index) => (
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