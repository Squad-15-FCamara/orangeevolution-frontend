import { useState, useEffect } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from '../SavedContent/style';
import { statisticsService } from '../../services/statisticsService';
import { COURSE_STATUS } from './courseStatus';

export function Progress() {
  const [doingCourses, setDoingCourse] = useState([]);
  const [doneCourses, setDoneCourse] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState([]);

  useEffect(() => {
    fetchingDoing();
    fetchingDone();
    setDisplayedCourses(doneCourses.concat(doingCourses));
  },[]);

  const fetchingDoing = async () => {
    try {
      let response = await statisticsService.getDoingCoursesByUser(4);
      setDoingCourse(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  const fetchingDone = async () => {
    try {
      let response = await statisticsService.getDoneCoursesByUser(4);
      setDoneCourse(response.data);
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  const filterCourses = (status) => {
    if (status === "Em andamento") {
      return setDisplayedCourses(doingCourses);
    } else if (status === "Concluídos") {
      return setDisplayedCourses(doneCourses);
    }
  }

  return (
    <Wrapper>
      <PageTitle>Progresso</PageTitle>
      <Stats>Acesse aqui seu progresso nos estudos</Stats>
      <FilterContainer>
        {COURSE_STATUS.map((item, index) => <ButtonS key={index} onClick={() => filterCourses(item)} >{item}</ButtonS>)}
      </FilterContainer>
      <ContainerTheme>
        {displayedCourses.map((card, index) => (
          <ChosedRoadCard
            title={card.title}
            idType={card.idType}
            time={card.time}
            idTheme={card.idTheme}
            idRoad={card.idRoad}
            link={card.link}
            key={index}
          />
        ))}
      </ContainerTheme>
    </Wrapper>
  );
}
