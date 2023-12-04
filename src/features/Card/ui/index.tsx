import React from "react";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { Button } from "@shared/ui/Button";
import { CategoryTab } from "@shared/ui/CategoryTab";

import "./styles.scss";

interface CardProps {
  image: string;
  text: string;
}

export const Card: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="card">
      <CategoryTab text="Мука" />
      <img src={image} className="card__image" alt="card-image" />
      <span className="card__text w-[60%] mt-8">{text}</span>
      <div className="w-full flex justify-center">
        <UtilityButton
          text="Подробнее"
          type="filled mt-4"
          width="80%"
          onClick={() => console.log("zhopa")}
        />
      </div>
    </div>
  );
};
