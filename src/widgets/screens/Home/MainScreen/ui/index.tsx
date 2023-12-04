import { Card } from "@features/Card/ui";
import { Header } from "@features/Header/ui";
import { Button } from "@shared/ui/Button/";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "react-awesome-reveal";
import { Menu } from "@features/Menu";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

import image from "@assets/images/flavor.webp";
import "./styles.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MainScreen = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Header />
      {isMenuOpen && <Menu />}
      <main className="container">
        <Slide triggerOnce>
          <h1>SUN GRAIN</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p className="paragraph text-center">
            Ваш Надежный Партнер в Поставке Качественной Продукции
          </p>
        </Slide>
        <Slide direction="up" className="w-full" triggerOnce>
          <Swiper
            className="swiper flex items-center justify-center mt-6"
            slidesPerView={1}
            spaceBetween={64}
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
        </Slide>
        <Slide direction="up" delay={500} triggerOnce>
          <Button text="Вся продукция" margin="mt-10" />
        </Slide>
      </main>
    </>
  );
};
