import { Card } from "@features/Card/ui";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { Button } from "@shared/ui/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import image from "@assets/images/flavor.webp";

export const CatalogueScreen = () => {
  return (
    <div className="container" id="catalogue">
      <h2 className="second-heading mt-0 mb-8">Каталог</h2>
      <div className="w-full flex items-center justify-between">
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
      </div>
      <Card
        text="Самая вкусная мука Sun Grain"
        description="Лучшая мука в мире, покупайте у нас"
        image={image}
      />
      <Card
        text="Самая вкусная мука Sun Grain"
        description="Лучшая мука в мире, покупайте у нас"
        margin="mt-6"
        image={image}
      />
      <Card
        text="Самая вкусная мука Sun Grain"
        description="Лучшая мука в мире, покупайте у нас"
        margin="mt-6"
        image={image}
      />
      <Button text="Весь каталог" margin="mt-8" buttonType="filledx" />
    </div>
  );
};
