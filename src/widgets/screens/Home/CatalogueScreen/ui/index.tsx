import { Gallery } from "@features/Gallery";
import { Card } from "@features/Card/ui";
import { Button } from "@shared/ui/Button";

import { Swiper, SwiperSlide } from "swiper/react";

// Assets
import buckwheat from "@assets/images/cards/buckwheat.webp";
import wheat from "@assets/images/cards/wheat.webp";
import cereal from "@assets/images/cards/cereals.webp";
import flour from "@assets/images/cards/flour.webp";
import peas from "@assets/images/cards/peas.webp";

export const CatalogueScreen = () => {
  return (
    <>
      <div className="container">
        <h2 className="second-heading mt-0 mb-8">Каталог</h2>
        {/* <div className="w-full flex items-center justify-between">
          <Swiper
            className="swiper flex items-center justify-center mt-6 mb-12"
            slidesPerView={3}
            spaceBetween={64}
          >
            <SwiperSlide className="w-[100%]">
              <UtilityButton
                width="auto"
                text="Мука"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[100%]">
              <UtilityButton
                width="auto"
                text="Пшено"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <UtilityButton
                width="auto"
                text="Зерно"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <UtilityButton
                width="auto"
                text="Зерно"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <UtilityButton
                width="auto"
                text="Зерно"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <UtilityButton
                width="auto"
                text="Зерно"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <UtilityButton
                width="auto"
                text="Зерно"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
          </Swiper>
        </div> */}
        <Gallery />
        <Button text="Весь каталог" margin="mt-8" buttonType="filledx" />
      </div>{" "}
      <div className="container-pc">
        <h2 className="second-heading mt-0 mb-8">Каталог</h2>
        {/* <div className="w-full flex items-center justify-between">
          <Swiper
            className="swiper-pc flex items-center justify-center mt-6 mb-12"
            slidesPerView={5}
            spaceBetween={32}
          >
            <SwiperSlide className="w-[50%]">
              <UtilityButton
                width="auto"
                text="Мука"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[50%]">
              <UtilityButton
                width="auto"
                text="Пшено"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[50%]">
              <UtilityButton
                width="auto"
                text="Зерно"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[50%]">
              <UtilityButton
                width="auto"
                text="Зерно"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[50%]">
              <UtilityButton
                width="auto"
                text="Зерно"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[50%]">
              <UtilityButton
                width="auto"
                text="Зерно"
                onClick={() => console.log("Мука")}
                type="filled-no-width"
              />
            </SwiperSlide>
          </Swiper>
        </div> */}
        <div className="w-full flex items-center justify-between">
          <Card
            price="11.500₸"
            text="Мука русское поле, 50кг"
            // categoryText="Мука"
            description="Лучшая мука в мире, покупайте у нас"
            image={flour}
          />
          <Card
            price="7.500₸"
            text="Гречка ядрица, 25кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
          <Card
            price="760₸"
            text="Крупа гречневая ядрица 1 сорт, 0.8кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={buckwheat}
          />
          <Card
            price="500₸"
            text="Горох шлифованный колотый, 0.8кг"
            // categoryText="Горох"
            description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
        </div>
        <div className="w-full flex items-center justify-between mt-8">
          <Card
            price="550₸"
            text="Горох шлифованный колотый, 0.8кг"
            // categoryText="Горох"
            description="Лучшая мука в мире, покупайте у нас"
            image={peas}
          />
          <Card
            price="550₸"
            text="Пшено шлифованное в/c, 0.8кг"
            // categoryText="Пшено"
            description="Лучшая мука в мире, покупайте у нас"
            image={wheat}
          />
          <Card
            price="500₸"
            text="Крупа манная Марка М, 0.6кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
          <Card
            price="340₸"
            text="Хлопья овсяные, 0.4кг"
            // categoryText="Крупа"
            description="Лучшая мука в мире, покупайте у нас"
            image={cereal}
          />
        </div>
        <Button text="Весь каталог" margin="mt-16" buttonType="filled" />
      </div>
    </>
  );
};
