import React from "react";
import { Feature } from "@features/Feature";
import { faMagento } from "@fortawesome/free-brands-svg-icons";

import about from "@assets/images/about_image.webp";

import "./styles.scss";
import { Slide } from "react-awesome-reveal";

export const AboutScreen = () => {
  return (
    <div className="about-screen" id="about">
      <div className="container">
        <Slide></Slide>
        <h2 className="second-heading mt-8 mb-8">О компании Sun Grain</h2>
        <p className="paragraph mb-4">
          ТОО "Sun Grain" — ваш источник превосходного зерна по выгодным ценам.
          Мы гарантируем, что каждая партия нашего продукта соответствует самым
          высоким стандартам качества.
          <br /> <br />С 2012 года наша репутация надежного поставщика только
          укреплялась. "Sun Grain" приглашает к сотрудничеству всех, кто ценит
          качество и отличное обслуживание.
          <br /> <br /> С собственным производством и отлаженной логистикой, мы
          способны оперативно удовлетворять запросы наших клиентов.
          <br />
          <br />
          Выбирая "Sun Grain", вы можете быть уверены в превосходстве продукции
          и её своевременной доставке.
        </p>
        <div className="w-full flex items-center justify-between gap-5 mt-8">
          <Feature name="Качество" icon={faMagento} />
          <Feature name="Качество" icon={faMagento} />
        </div>
        <div className="w-full flex items-center justify-between gap-4 mt-5">
          <Feature name="Качество" icon={faMagento} />
          <Feature name="Качество" icon={faMagento} />
        </div>
        <img src={about} className="about-image mt-12 mb-8" alt="about-image" />
      </div>
    </div>
  );
};
