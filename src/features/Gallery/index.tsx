import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card } from "@features/Card/ui";
import image from "@assets/images/flavor.webp";

import "./styles.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Gallery = () => {
  return (
    <Swiper
<<<<<<< HEAD
      className="swiper flex items-center justify-center mt-6 h-[70vh]"
=======
      className="swiper flex items-center justify-center mt-6 h-[75vh]"
>>>>>>> e051637949ae747a9f69390f7e157f12ff8bf885
      slidesPerView={1}
      spaceBetween={64}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="swiper__slide">
        <Card
          text="Самая вкусная мука Sun Grain"
          description="Лучшая мука в мире, покупайте у нас"
          image={image}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide">
        <Card
          text="Самая вкусная мука Sun Grain"
          description="Лучшая мука в мире, покупайте у нас"
          image={image}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide">
        <Card
          text="Самая вкусная мука Sun Grain"
          description="Лучшая мука в мире, покупайте у нас"
          image={image}
        />
      </SwiperSlide>
      <SwiperSlide className="swiper__slide">
        <Card
          text="Самая вкусная мука Sun Grain"
          description="Лучшая мука в мире, покупайте у нас"
          image={image}
        />
      </SwiperSlide>
    </Swiper>
  );
};
