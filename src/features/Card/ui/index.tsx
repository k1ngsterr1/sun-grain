import React from "react";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { Button } from "@shared/ui/Button";

import "./styles.scss";

interface CardProps {
  image: string;
  text: string;
}

export const Card: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} className="card__image" alt="card-image" />
      <span className="card__text w-[60%] mt-8">{text}</span>
      <div className="flex justify-between">
        <UtilityButton
          text="Вся Категория"
          type="neutral"
          width="50%"
          onClick={() => console.log("zhopa")}
        />
        <UtilityButton
          text="Подробнее"
          type="filled"
          width="50%"
          onClick={() => console.log("zhopa")}
        />
      </div>
    </div>
  );
};
