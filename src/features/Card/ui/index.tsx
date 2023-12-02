import React from "react";

import "./styles.scss";

interface CardProps {
  image: string;
  text: string;
}

export const Card: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} className="card__image" alt="card-image" />
      <span className="card__text">{text}</span>
    </div>
  );
};
