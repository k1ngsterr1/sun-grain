import React from "react";
import { UtilityButton } from "@shared/ui/UtilityButton";
// import { CategoryTab } from "@shared/ui/CategoryTab";

import "./styles.scss";

interface CardDetails {
  detailItem: string;
}

interface CardProps {
  image: string;
  text: string;
  details: CardDetails[];
  description?: string;
  margin?: string;
  price: string;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  image,
  text,
  details,
  description,
  margin,
  price,
  onClick,
}) => {
  return (
    <div className={`card ${margin}`}>
      {/* <CategoryTab text={categoryText} /> */}
      <img src={image} className="card__image rounded-md" alt="card-image" />
      <span className="card__text w-[90%] mt-8">{text}</span>
      <span className="card__description w-[90%] mt-2">{description}</span>
      <strong className="card__details-heading mt-2">Характеристики:</strong>
      <ol className="text-center">
        {details.map((item, index) => (
          <li key={index} className="text-lg mt-2">
            {item.detailItem}
          </li>
        ))}
      </ol>
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
