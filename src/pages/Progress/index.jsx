import { useState, useEffect } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from '../SavedContent/style';
import { statisticsService } from '../../services/statisticsService';

export function Progress() {
  const [doingcourse, setDoingCourse] = useState([]);
  const [donecourse, setDoneCourse] = useState([]);

  useEffect(() => {
    fetchingDoing();
    fetchingDone();
  }),
    [];

  const fetchingDoing = async () => {
    let response = await statisticsService.getDoingCoursesByUser(4);
    setDoingCourse(response.data);
  };

  const fetchingDone = async () => {
    let responseDone = await statisticsService.getDoneCoursesByUser(4);
    setDoneCourse(responseDone.data);
  };

  return (
    <Wrapper>
      <PageTitle>Progresso</PageTitle>
      <Stats>Acesse aqui seu progresso nos estudos</Stats>
      <FilterContainer></FilterContainer>
      <ContainerTheme>
        {doingcourse.map((card, index) => (
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

        {donecourse.map((card, index) => (
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
