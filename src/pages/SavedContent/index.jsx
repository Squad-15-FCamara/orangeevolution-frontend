import api from '../../services/api';
import { useState, useEffect } from 'react';
import { ChosedRoadCard } from '../../components/ChosedRoadCard';
import { ContainerTheme } from '../ContentIntro/style';
import { Wrapper } from '../Home/style';
import { Stats } from '../RoadDev/style';
import { ButtonS, FilterContainer, PageTitle } from './style';

export function SavedContent() {
  const [roadDev, setRoadDev] = useState([]);
  const [isclicked, setIsClicked] = useState(false);

  useEffect(() => {
    api
      .get('/statistics/favorites/courses/4')
      .then((response) => setRoadDev(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);
  function isClicked() {
    isclicked === true ? setIsClicked(false) : setIsClicked(true);
  }

  return (
    <Wrapper>
      <PageTitle>Salvos</PageTitle>
      <Stats>Acesse aqui seus conteúdos salvos</Stats>
      <FilterContainer>
        <ButtonS onClick={isClicked} isclicked={isclicked}>
          Tudo
        </ButtonS>
        <ButtonS onClick={isClicked} isclicked={isclicked}>
          Dev Full Stack
        </ButtonS>
        <ButtonS onClick={isClicked} isclicked={isclicked}>
          UX/UI Design
        </ButtonS>
        <ButtonS onClick={isClicked} isclicked={isclicked}>
          QA
        </ButtonS>
        <ButtonS onClick={isClicked} isclicked={isclicked}>
          Soft Skills
        </ButtonS>
      </FilterContainer>
      <ContainerTheme>
        {roadDev.map((card, index) => (
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
        ))}
      </ContainerTheme>
    </Wrapper>
  );
}
