import { useState, useEffect } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from './style';
import { statisticsService } from '../../services/statisticsService';

export function SavedContent() {
  const [filtered, setFiltered] = useState([]);
  const [favThemes, setFavThemes] = useState([]);

  useEffect(async () => {
    statisticsService.getFavoritesCoursesByUser(4);
    let favs = statisticsService.getFavoritesCoursesByUser(4).idTheme;
    setFavThemes(favs)
  }, [])

  const fetchCourses = async (title) => {
    const response = await statisticsService.getFavoritesCoursesByUser(4);
    if (title === "Tudo") {
      return setFiltered(response.data);
    }
    const filteredContent = response.data.filter(item => item.idTheme.toLowerCase().includes(title.toLowerCase()));
    setFiltered(filteredContent);
  }

  return (
    <Wrapper>
      <PageTitle>Salvos</PageTitle>
      <Stats>Acesse aqui seus conteúdos salvos</Stats>
      <FilterContainer>
        {favThemes ? favThemes.map((item, index) => <ButtonS key={index} /*clicked={isclicked}*/ onClick={() => fetchCourses(item)} >{item}</ButtonS>) : <h1>non ecsiste</h1>}
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
        )) : <h1>foi mal brother.. sem conteúdo</h1>}
      </ContainerTheme>
    </Wrapper>
  );
}