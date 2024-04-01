import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { register } from "swiper/element/bundle";
import style from './Carousel.module.scss';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';

// Certifique-se de registrar os módulos necessários
register();

const Carousel: React.FC = () => {
  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      autoplay={{delay: 3000}}
      className={style.mySwiper}
    >
      <SwiperSlide>
        <img className={style.img} src="assets/img/faculdade.jpeg" alt="Slide 1" />
      </SwiperSlide>

      <SwiperSlide>
        <img className={style.img} src="assets/img/quartel.jpeg" alt="Slide 2" />
      </SwiperSlide>

      <SwiperSlide>
        <img className={style.img} src="assets/img/camara.jpeg" alt="Slide 3" />
      </SwiperSlide>

      <SwiperSlide>
        <img className={style.img} src="assets/img/curso_web_mobile.jpg" alt="Slide 4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;



