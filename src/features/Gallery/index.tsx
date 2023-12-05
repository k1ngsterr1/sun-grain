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
      className="swiper flex items-center justify-center mt-6 h-[66vh]"
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
