import { useState, useEffect, useContext } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from '../SavedContent/style';
import { statisticsService } from '../../services/statisticsService';
import { COURSE_STATUS } from './courseStatus';
import { favContext } from '../../context/favoritesContext';

export function Progress() {
  const [doingCourses, setDoingCourse] = useState([]);
  const [doneCourses, setDoneCourse] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [clicked, setClicked] = useState('Tudo');
  const { favorites } = useContext(favContext);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      let doingResponse = await statisticsService.getDoingCoursesByUser(4);
      let doneResponse = await statisticsService.getDoneCoursesByUser(4);
      setDoingCourse(doingResponse.data);
      setDoneCourse(doneResponse.data);
      setDisplayedCourses(doingResponse.data.concat(doneResponse.data));
    } catch (e) {
      console.error('Ops! Encontramos um erro: ' + e);
    }
  };

  const filterCourses = (status) => {
    setClicked(status);
    if (status === "Em andamento") {
      return setDisplayedCourses(doingCourses);
    } else if (status === "Concluídos") {
      return setDisplayedCourses(doneCourses);
    } else return setDisplayedCourses(doingCourses.concat(doneCourses));
  }

  return (
    <Wrapper>
      <PageTitle>Progresso</PageTitle>
      <Stats>Acesse aqui seu progresso nos estudos</Stats>
      <FilterContainer>
        {COURSE_STATUS.map((item, index) => <ButtonS key={index} clicked={item === clicked} onClick={() => filterCourses(item)} >{item}</ButtonS>)}
      </FilterContainer>
      <ContainerTheme>
        {displayedCourses.map((card, index) => (
          <ChosedRoadCard
            id={card.id}
            title={card.title}
            idType={card.idType}
            time={card.time}
            idTheme={card.idTheme}
            idRoad={card.idRoad}
            link={card.link}
            key={index}
            arrFav={favorites}
          />
        ))}
      </ContainerTheme>
    </Wrapper>
  );
}
