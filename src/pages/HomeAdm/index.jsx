import {
  Card,
  Wrapper,
  Cards,
  CardsNews,
  Header,
  SubHeader,
  Status,
  CardsStudy,
  LinkCard,
} from './style';
import CardOrange from './card_orange_juice.svg';
import { RoadCard } from '../../components/RoadCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { StudyCard } from '../../components/StudyCard';

import { statisticsService } from '../../services/statisticsService';
import { useEffect, useState } from 'react';
import { RoadCardAdm } from '../../components/RoadCardAdm';
import { Loading } from '../../components/Loading';

export const HomeAdm = () => {
  const [doingcourse, setDoingCourse] = useState([]);
  const [donecourse, setDoneCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchingDoing();
    fetchingDone();
  }),
    [];

  const fetchingDoing = async () => {
    let response = await statisticsService.getDoingCoursesByUser(4);
    setDoingCourse(response.data);
    setIsLoading(false);
  };

  const fetchingDone = async () => {
    let responseDone = await statisticsService.getDoneCoursesByUser(4);
    setDoneCourse(responseDone.data);
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <Header> Olá, Bianca! </Header>
      <SubHeader>Novidades Orange</SubHeader>

      <CardsNews>
        <Swiper
          style={{
            width: '73%',
            height: '100%',
            marginLeft: '0px',
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Pagination, Scrollbar]}
          breakpoints={{
            900: { slidesPerView: 2.5 },
            500: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide style={{ width: '100%' }}>
            <LinkCard
              target="blank"
              href="https://www.youtube.com/watch?v=dtt6GoGJkKM"
            >
              <Card src={CardOrange} />
            </LinkCard>
          </SwiperSlide>
          <SwiperSlide>
            <LinkCard
              target="blank"
              href="https://www.youtube.com/watch?v=dtt6GoGJkKM"
            >
              <Card src={CardOrange} />
            </LinkCard>
          </SwiperSlide>
          <SwiperSlide>
            <LinkCard
              target="blank"
              href="https://www.youtube.com/watch?v=dtt6GoGJkKM"
            >
              <Card src={CardOrange} />
            </LinkCard>
          </SwiperSlide>
          <SwiperSlide>
            <LinkCard
              target="blank"
              href="https://www.youtube.com/watch?v=dtt6GoGJkKM"
            >
              <Card src={CardOrange} />
            </LinkCard>
          </SwiperSlide>
          <SwiperSlide>
            <LinkCard
              target="blank"
              href="https://www.youtube.com/watch?v=dtt6GoGJkKM"
            >
              <Card src={CardOrange} />
            </LinkCard>
          </SwiperSlide>
          <SwiperSlide>
            <LinkCard
              target="blank"
              href="https://www.youtube.com/watch?v=dtt6GoGJkKM"
            >
              <Card src={CardOrange} />
            </LinkCard>
          </SwiperSlide>
        </Swiper>
      </CardsNews>

      <SubHeader>Trilhas </SubHeader>

      <RoadCardAdm />

      <SubHeader>Atividades dos Usuários</SubHeader>

      <Status>Mais Acessados</Status>

      <CardsStudy>
        <Swiper
          style={{ display: 'flex' }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Pagination, Scrollbar]}
          breakpoints={{
            900: { slidesPerView: 2.5 },
            500: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              height: '360px',
              gap: '24px',
              zIndex: '1',
            }}
          >
            {isLoading ? (
              <Loading />
            ) : (
              doingcourse.map((card, index) => (
                <StudyCard
                  title={card.title}
                  idType={card.idType}
                  time={card.time}
                  idTheme={card.idTheme}
                  idRoad={card.idRoad}
                  link={card.link}
                  key={index}
                />
              ))
            )}
          </SwiperSlide>
          <SwiperSlide />
          <SwiperSlide />
        </Swiper>
      </CardsStudy>
      <br />
      <br />
      <Status>Salvos com Frequência</Status>

      <CardsStudy>
        <Swiper
          style={{ display: 'flex' }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Pagination, Scrollbar]}
          breakpoints={{
            900: { slidesPerView: 2.5 },
            500: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              height: '360px',
              gap: '24px',
              zIndex: '1',
            }}
          >
            {isLoading ? (
              <Loading />
            ) : (
              donecourse.map((card, index) => (
                <StudyCard
                  title={card.title}
                  idType={card.idType}
                  time={card.time}
                  idTheme={card.idTheme}
                  idRoad={card.idRoad}
                  link={card.link}
                  key={index}
                />
              ))
            )}
          </SwiperSlide>
          <SwiperSlide />
          <SwiperSlide />
        </Swiper>
      </CardsStudy>
    </Wrapper>
  );
};
