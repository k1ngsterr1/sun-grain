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
            text='Мука пшеничная в/c "русское поле," 50кг'
            // categoryText="Мука"
            onClick={() => handleButtonClick("Мука русское поле, 50кг", "form")}
            // description="Лучшая мука в мире, покупайте у нас"
            image={flour}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="7.500₸"
            text="Крупа гречневая ядрица, 25кг"
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
            price="500₸"
            text="Горох шлифованный колотый, 0.8кг"
            // categoryText="Горох"
            onClick={() =>
              handleButtonClick("Горох шлифованный колотый, 0.8кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="550₸"
            text="Пшено шлифованное в/c, 0.8кг"
            // categoryText="Пшено"
            // description="Лучшая мука в мире, покупайте у нас"
            onClick={() =>
              handleButtonClick("Пшено шлифованное в/c, 0.8кг", "form")
            }
            image={wheat}
          />
        </SwiperSlide>
        {/* <SwiperSlide className="swiper__slide">
          <Card
            price="500₸"
            text="Крупа манная Марка М, 0.6кг"
            categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Крупа манная Марка М, 0.6кг", "form")
            }
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide> */}
        {/* <SwiperSlide className="swiper__slide">
          <Card
            price="340₸"
            text="Хлопья овсяные, 0.4кг"
            categoryText="Крупа"
            onClick={() => handleButtonClick("Хлопья овсяные, 0.4кг", "form")}
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide> */}
        {/* <SwiperSlide className="swiper__slide">
          <Card
            price="370₸"
            text="Хлопья 3 злака, 0.4кг"
            categoryText="Крупа"
            onClick={() => handleButtonClick("Хлопья 3 злака, 0.4кг", "form")}
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide> */}
        {/* <SwiperSlide className="swiper__slide">
          <Card
            price="380₸"
            text="Хлопья 4 злака, 0.4кг"
            categoryText="Крупа"
            onClick={() => handleButtonClick("Хлопья 4 злака, 0.4кг", "form")}
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide> */}
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
        <SwiperSlide className="swiper__slide">
          <Card
            price="1.800₸"
            text="Горох шлифованный колотый, 3кг"
            // categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Горох шлифованный колотый, 3кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="1.350₸"
            text="Хлопья овсяные Геркулес, 1.7кг"
            // categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Хлопья овсяные Геркулес, 1.7кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
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
            text='Мука пшеничная в/c "русское поле", 50кг'
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
            price="500₸"
            text="Горох шлифованный колотый, 0.8кг"
            // categoryText="Горох"
            onClick={() =>
              handleButtonClick("Горох шлифованный колотый, 0.8кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </SwiperSlide>
        {/* <SwiperSlide className="swiper__slide">
          <Card
            price="550₸"
            text="Пшено шлифованное в/c, 0.8кг"
            categoryText="Пшено"
            onClick={() =>
              handleButtonClick("Пшено шлифованное в/c, 0.8кг", "form")
            }
            description="Лучшая мука в мире, покупайте у нас"
            image={wheat}
          />
        </SwiperSlide> */}
        {/* <SwiperSlide className="swiper__slide">
          <Card
            price="500₸"
            text="Крупа манная Марка М, 0.6кг"
            categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Пшено шлифованное в/c, 0.8кг", "form")
            }
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide> */}
        {/* <SwiperSlide className="swiper__slide">
          <Card
            price="340₸"
            text="Хлопья овсяные, 0.4кг"
            categoryText="Крупа"
            onClick={() => handleButtonClick("Хлопья овсяные, 0.4кг", "form")}
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide> */}
        {/* <SwiperSlide className="swiper__slide">
          <Card
            price="370₸"
            text="Хлопья 3 злака, 0.4кг"
            categoryText="Крупа"
            onClick={() => handleButtonClick("Хлопья 3 злака, 0.4кг", "form")}
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide> */}
        {/* <SwiperSlide className="swiper__slide">
          <Card
            price="380₸"
            text="Хлопья 4 злака, 0.4кг"
            categoryText="Крупа"
            onClick={() => handleButtonClick("Хлопья 4 злака, 0.4кг", "form")}
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide> */}
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
        <SwiperSlide className="swiper__slide">
          <Card
            price="1.800₸"
            text="Горох шлифованный колотый, 3кг"
            // categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Горох шлифованный колотый, 3кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="1.350₸"
            text="Хлопья овсяные Геркулес, 1.7кг"
            // categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Хлопья овсяные Геркулес, 1.7кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
