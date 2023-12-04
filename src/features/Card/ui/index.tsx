import React from "react";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { CategoryTab } from "@shared/ui/CategoryTab";

import "./styles.scss";

interface CardProps {
  image: string;
  text: string;
  description: string;
  margin?: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  text,
  description,
  margin,
}) => {
  return (
    <div className={`card ${margin}`}>
      <CategoryTab text="Мука" />
      <img src={image} className="card__image" alt="card-image" />
      <span className="card__text w-[70%] mt-8">{text}</span>
      <span className="card__description w-[90%] mt-2">{description}</span>
      <div className="w-full flex justify-center">
        <UtilityButton
          text="Категория"
          type="neutral mt-4"
          width="20%"
          onClick={() => console.log("zhopa")}
        />
        <UtilityButton
          text="Подробнее"
          type="filled mt-4 ml-4"
          width="auto"
          onClick={() => console.log("zhopa")}
        />
      </div>
    </div>
  );
};
