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
        className="swiper flex items-center justify-center mt-6 h-[92vh]"
        slidesPerView={1}
        spaceBetween={64}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="swiper__slide">
          <Card
            price="11.500₸"
            text='Мука пшеничная "Русское поле", 50кг'
            details={[
              { detailItem: "Цвет: Белый с кремовым оттенком" },
              { detailItem: "Число падения: 240" },
              { detailItem: "Белизна: 56 усл. ед." },
              { detailItem: "Массовая доля влаги: 14.6%" },
              { detailItem: "Клейковина: 28%" },
              { detailItem: "ИДК: 70-75 ед." },
            ]}
            onClick={() => handleButtonClick("Мука русское поле, 50кг", "form")}
            image={flour}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="14.500₸"
            text='Мука пшеничная "Крепчатка Золотая", 50кг'
            details={[
              { detailItem: "Цвет: Белый с кремовым оттенком" },
              { detailItem: "Число падения: 240" },
              { detailItem: "Белизна: 60 усл. ед." },
              { detailItem: "Массовая доля влаги: 14.8%" },
              { detailItem: "Клейковина: 28-30%" },
              { detailItem: "ИДК: 55-65 ед." },
            ]}
            onClick={() => handleButtonClick("Гречка ядрица, 25кг", "form")}
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="10.000₸"
            text="Мука 'Крупчатка Золотая', 25кг"
            details={[
              { detailItem: "Цвет: Белый с кремовым оттенком" },
              { detailItem: "Число падения: 270" },
              { detailItem: "Белизна: 65 усл. ед." },
              { detailItem: "Массовая доля влаги: 14.8%" },
              { detailItem: "Клейковина: 28%" },
              { detailItem: "ИДК: 55-60 ед." },
              { detailItem: "W (энергия деформации): 320" },
            ]}
            // categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Мука крупчатка золотая, 25кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="7.500₸"
            text="Крупа гречневая 1 сорт, 25кг"
            details={[
              { detailItem: "Сорт: Первый" },
              { detailItem: "Эн.Ценность (ккал): 335" },
              { detailItem: "Белки: 12.6г." },
              { detailItem: "Жиры: 3.3г" },
              { detailItem: "Углеводы: 62.1г" },
              { detailItem: "Срок хранения 20 мес." },
              { detailItem: "Масса: 25кг" },
            ]}
            onClick={() =>
              handleButtonClick("Крупа Гречневая Ядрица, 25кг", "form")
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
            text='Мука пшеничная "Русское поле", 50кг'
            details={[
              { detailItem: "Цвет: Белый с кремовым оттенком" },
              { detailItem: "Число падения: 240" },
              { detailItem: "Белизна: 56 усл. ед." },
              { detailItem: "Массовая доля влаги: 14.6%" },
              { detailItem: "Клейковина: 28%" },
              { detailItem: "ИДК: 70-75 ед." },
            ]}
            onClick={() => handleButtonClick("Мука русское поле, 50кг", "form")}
            image={flour}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="14.500₸"
            text='Мука пшеничная "Крепчатка Золотая", 50кг'
            details={[
              { detailItem: "Цвет: Белый с кремовым оттенком" },
              { detailItem: "Число падения: 240" },
              { detailItem: "Белизна: 60 усл. ед." },
              { detailItem: "Массовая доля влаги: 14.8%" },
              { detailItem: "Клейковина: 28-30%" },
              { detailItem: "ИДК: 55-65 ед." },
            ]}
            onClick={() => handleButtonClick("Гречка ядрица, 25кг", "form")}
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="10.000₸"
            text="Мука 'Крупчатка Золотая', 25кг"
            details={[
              { detailItem: "Цвет: Белый с кремовым оттенком" },
              { detailItem: "Число падения: 270" },
              { detailItem: "Белизна: 65 усл. ед." },
              { detailItem: "Массовая доля влаги: 14.8%" },
              { detailItem: "Клейковина: 28%" },
              { detailItem: "ИДК: 55-60 ед." },
              { detailItem: "W (энергия деформации): 320" },
            ]}
            // categoryText="Крупа"
            onClick={() =>
              handleButtonClick("Мука крупчатка золотая, 25кг", "form")
            }
            // description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <Card
            price="7.500₸"
            text="Крупа гречневая 1 сорт, 25кг"
            details={[
              { detailItem: "Сорт: Первый" },
              { detailItem: "Эн.Ценность (ккал): 335" },
              { detailItem: "Белки: 12.6г." },
              { detailItem: "Жиры: 3.3г" },
              { detailItem: "Углеводы: 62.1г" },
              { detailItem: "Срок хранения 20 мес." },
              { detailItem: "Масса: 25кг" },
            ]}
            onClick={() =>
              handleButtonClick("Крупа Гречневая Ядрица, 25кг", "form")
            }
            image={buckwheat}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
