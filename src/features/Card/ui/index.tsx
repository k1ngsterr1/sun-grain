import React from "react";
import { UtilityButton } from "@shared/ui/UtilityButton";
// import { CategoryTab } from "@shared/ui/CategoryTab";

import "./styles.scss";

interface CardProps {
  image: string;
  text: string;
  description?: string;
  margin?: string;
  price: string;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  image,
  text,
  description,
  margin,
  price,
  onClick,
}) => {
  return (
    <div className={`card ${margin}`}>
      {/* <CategoryTab text={categoryText} /> */}
      <img src={image} className="card__image" alt="card-image" />
      <span className="card__text w-[90%] mt-8">{text}</span>
      <span className="card__description w-[90%] mt-2">{description}</span>
      <div className="w-full flex justify-center">
        <UtilityButton
          text={price}
          type="filled mt-4 ml-4"
          width="auto"
          onClick={onClick}
        />
      </div>
    </div>
  );
};
