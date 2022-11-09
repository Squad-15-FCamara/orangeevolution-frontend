import { Card, Wrapper, Cards, Header, SubHeader} from "./style";
import CardOrange from './card_orange_juice.svg'
import { RoadCard } from "../../components/RoadCard";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Home = () => {




  return (
    <Wrapper>
      <Header> Olá, Thiago </Header>
      <SubHeader>Novidades Orange</SubHeader>

      <Cards>
        <Swiper
        style={{display: 'flex'}}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={60}
        slidesPerView={2.5}
        >
              <SwiperSlide><a target="blank" href='https://www.youtube.com/watch?v=dtt6GoGJkKM'><Card src={CardOrange}/></a></SwiperSlide>
              <SwiperSlide><a target="blank" href='https://www.youtube.com/watch?v=dtt6GoGJkKM'><Card src={CardOrange}/></a></SwiperSlide>
              <SwiperSlide><a target="blank" href='https://www.youtube.com/watch?v=dtt6GoGJkKM'><Card src={CardOrange}/></a></SwiperSlide>
        </Swiper>
      </Cards>

      <SubHeader>Trilhas </SubHeader>

      <RoadCard/>
    </Wrapper>
  );
}
