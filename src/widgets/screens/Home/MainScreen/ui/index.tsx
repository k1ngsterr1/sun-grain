import { Card } from "@features/Card/ui";
import { Header } from "@features/Header/ui";
import { Button } from "@shared/ui/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";

import image from "@assets/images/flavor.webp";
import "./styles.scss";

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
        <Swiper
          className="swiper flex items-center justify-center mt-6"
          slidesPerView={1}
          spaceBetween={64}
        >
          <SwiperSlide className="swiper__slide">
            <Card text="Самая вкусная мука Sun Grain" image={image} />
          </SwiperSlide>
          <SwiperSlide className="swiper__slide">
            <Card text="Самая вкусная мука Sun Grain" image={image} />
          </SwiperSlide>
          <SwiperSlide className="swiper__slide">
            <Card text="Самая вкусная мука Sun Grain" image={image} />
          </SwiperSlide>
          <SwiperSlide className="swiper__slide">
            <Card text="Самая вкусная мука Sun Grain" image={image} />
          </SwiperSlide>
        </Swiper>
        <Button text="Вся продукция" margin="mt-6" />
      </main>
    </>
  );
};
