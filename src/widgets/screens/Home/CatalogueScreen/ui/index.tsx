import { Card } from "@features/Card/ui";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { Button } from "@shared/ui/Button";
import { Fade, Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";

import image from "@assets/images/flavor.webp";

export const CatalogueScreen = () => {
  return (
    <div className="container" id="catalogue">
      <Fade triggerOnce>
        <h2 className="second-heading mt-0 mb-8">Каталог</h2>
      </Fade>
      <Fade triggerOnce className="w-full" delay={200}>
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
      </Fade>
      <Slide triggerOnce>
        <Card
          text="Самая вкусная мука Sun Grain"
          description="Лучшая мука в мире, покупайте у нас"
          image={image}
        />
      </Slide>
      <Slide triggerOnce direction="right">
        <Card
          text="Самая вкусная мука Sun Grain"
          description="Лучшая мука в мире, покупайте у нас"
          margin="mt-6"
          image={image}
        />
      </Slide>
      <Slide triggerOnce>
        <Card
          text="Самая вкусная мука Sun Grain"
          description="Лучшая мука в мире, покупайте у нас"
          margin="mt-6"
          image={image}
        />
      </Slide>
      <Slide triggerOnce>
        <Button text="Весь каталог" margin="mt-8" buttonType="filled" />
      </Slide>
    </div>
  );
};
