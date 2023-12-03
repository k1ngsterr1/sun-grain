import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();

  function navigateTo(url: string) {
    navigate(url);
  }

  return (
    <div className="menu flex flex-col items-end">
      <div className="menu__links flex flex-col items-end">
        <ScrollLink className="menu__links__link" to="catalogue">
          Каталог
        </ScrollLink>
        <Link className="menu__links__sub-link" to={"/catalogue"}>
          Мука
        </Link>{" "}
        <Link className="menu__links__sub-link" to={"/catalogue"}>
          Гречка
        </Link>
        <Link className="menu__links__sub-link" to={"/catalogue"}>
          Отруби пшеничные
        </Link>
        <Link className="menu__links__sub-link" to={"/catalogue"}>
          Отруби пшеничные
        </Link>
      </div>
      <div className="menu__links flex flex-col items-end">
        <ScrollLink className="menu__links__link" to="catalogue">
          О нас
        </ScrollLink>
      </div>
    </div>
  );
};
