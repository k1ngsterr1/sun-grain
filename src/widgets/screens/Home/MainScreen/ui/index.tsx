import { Card } from "@features/Card/ui";
import { Header } from "@features/Header/ui";
import { Button } from "@shared/ui/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MainScreen = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h1>SUN GRAIN</h1>
        <p className="paragraph text-center">
          Ваш Надежный Партнер в Поставке Качественной Продукции
        </p>
        <Swiper className="swiper" slidesPerView={1} spaceBetween={64}>
          <SwiperSlide className="swiper__slide">
            <Card text="ggg" image="ggg" />
          </SwiperSlide>
          <SwiperSlide className="swiper__slide">
            <Card text="ggg" image="ggg" />
          </SwiperSlide>
          <SwiperSlide className="swiper__slide">
            <Card text="ggg" image="ggg" />
          </SwiperSlide>
          <SwiperSlide className="swiper__slide">
            <Card text="ggg" image="ggg" />
          </SwiperSlide>
        </Swiper>
        <Button text="Вся продукция" />
      </main>
    </>
  );
};
