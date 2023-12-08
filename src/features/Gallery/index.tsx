import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card } from "@features/Card/ui";

// Assets
import buckwheat from "@assets/images/cards/buckwheat.webp";
import wheat from "@assets/images/cards/wheat.webp";
import cereal from "@assets/images/cards/cereals.webp";
import flour from "@assets/images/cards/flour.webp";
import peas from "@assets/images/cards/peas.webp";

import "./styles.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Gallery = () => {
  return (
    <>
      <Swiper
        className="swiper flex items-center justify-center mt-6 h-[70vh]"
        slidesPerView={1}
        spaceBetween={64}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper__slide">
          <Card
            price="11.500₸"
            text="Мука русское поле, 50кг"
            // categoryText="Мука"
            description="Лучшая мука в мире, покупайте у нас"
            image={flour}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="7.500₸"
            text="Гречка ядрица, 25кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="760₸"
            text="Крупа гречневая ядрица 1 сорт, 0.8кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="500₸"
            text="Горох шлифованный колотый, 0.8кг"
            // categoryText="Горох"
            description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="550₸"
            text="Горох шлифованный колотый, 0.8кг"
            // categoryText="Горох"
            description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="550₸"
            text="Пшено шлифованное в/c, 0.8кг"
            // categoryText="Пшено"
            description="Лучшая мука в мире, покупайте у нас"
            image={wheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="500₸"
            text="Крупа манная Марка М, 0.6кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="340₸"
            text="Хлопья овсяные, 0.4кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="370₸"
            text="Хлопья 3 злака, 0.4кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="380₸"
            text="Хлопья 4 злака, 0.4кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="2.800₸"
            text="Крупа гречневая 1 сорт, 3кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="1.800₸"
            text="Горох шлифованный колотый, 3кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="1.350₸"
            text="Хлопья овсяные Геркулес, 1.7кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="swiper-pc flex items-center justify-center mt-1 h-[70vh]"
        slidesPerView={4}
        spaceBetween={64}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper__slide">
          <Card
            price="11.500₸"
            text="Мука русское поле, 50кг"
            // categoryText="Мука"
            description="Лучшая мука в мире, покупайте у нас"
            image={flour}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="7.500₸"
            text="Гречка ядрица, 25кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="760₸"
            text="Крупа гречневая ядрица 1 сорт, 0.8кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="500₸"
            text="Горох шлифованный колотый, 0.8кг"
            // categoryText="Горох"
            description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="550₸"
            text="Пшено шлифованное в/c, 0.8кг"
            // categoryText="Пшено"
            description="Лучшая мука в мире, покупайте у нас"
            image={wheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="500₸"
            text="Крупа манная Марка М, 0.6кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="340₸"
            text="Хлопья овсяные, 0.4кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="370₸"
            text="Хлопья 3 злака, 0.4кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="380₸"
            text="Хлопья 4 злака, 0.4кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="2.800₸"
            text="Крупа гречневая 1 сорт, 3кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="1.800₸"
            text="Горох шлифованный колотый, 3кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="1.350₸"
            text="Хлопья овсяные Геркулес, 1.7кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
