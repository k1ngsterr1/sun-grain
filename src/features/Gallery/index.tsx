import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card } from "@features/Card/ui";
import { useDispatch } from "react-redux";
import { scroller } from "react-scroll";
import { setProduct } from "@redux/productSlice";

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
  const dispatch = useDispatch();

  const handleButtonClick = (newProductValue: string, elementId: string) => {
    dispatch(setProduct(newProductValue));

    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

  return (
    <>
      <Swiper
        className="swiper flex items-center justify-center mt-6 h-[80vh]"
        slidesPerView={1}
        spaceBetween={64}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper__slide">
          <Card
            price="11.500₸"
            text='Мука пшеничная в/c "Русское поле", 50кг'
            onClick={() => handleButtonClick("Мука русское поле, 50кг", "form")}
            image={flour}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="7.500₸"
            text="Крупа гречневая ядрица, 25кг"
            onClick={() => handleButtonClick("Гречка ядрица, 25кг", "form")}
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="760₸"
            text="Крупа гречневая ядрица 1 сорт, 0.8кг"
            // categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Крупа гречневая ядрица 1 сорт, 0.8кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="2.800₸"
            text="Крупа гречневая 1 сорт, 3кг"
            onClick={() =>
              handleButtonClick("Крупа гречневая 1 сорт, 3кг", "form")
            }
            image={buckwheat}
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
            text='Мука пшеничная в/c "Русское поле", 50кг'
            // categoryText="Мука"
            onClick={() => handleButtonClick("Мука русское поле, 50кг", "form")}
            // description="Лучшая мука в мире, покупайте у нас"
            image={flour}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="7.500₸"
            text="Крупа гречнева ядрица, 25кг"
            // categoryText="Крупа"
            onClick={() => handleButtonClick("Гречка ядрица, 25кг", "form")}
            // description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="760₸"
            text="Крупа гречневая ядрица 1 сорт, 0.8кг"
            // categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Крупа гречневая ядрица 1 сорт, 0.8кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>

        <SwiperSlide className="swiper__slide">
          <Card
            price="2.800₸"
            text="Крупа гречневая 1 сорт, 3кг"
            // categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Крупа гречневая 1 сорт, 3кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
