import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles.scss";

export const Menu = () => {
  const navigate = useNavigate();

  function navigateTo(url: string) {
    navigate(url);
  }

  return (
    <div className="menu flex flex-col items-end">
      <div className="menu__links flex flex-col items-end mt-6">
        <ScrollLink className="menu__links__link" to="main">
          Главная
        </ScrollLink>
      </div>
      <div className="menu__links flex flex-col items-end mt-6">
        <ScrollLink className="menu__links__link" to="catalogue">
          Каталог
        </ScrollLink>
        <Link className="menu__links__sub-link mt-2" to={"/catalogue"}>
          Мука
        </Link>{" "}
        <Link className="menu__links__sub-link mt-2" to={"/catalogue"}>
          Гречка
        </Link>
        <Link className="menu__links__sub-link mt-2" to={"/catalogue"}>
          Отруби пшеничные
        </Link>
        <Link className="menu__links__sub-link mt-2" to={"/catalogue"}>
          Отруби пшеничные
        </Link>
      </div>
      <div className="menu__links flex flex-col items-end mt-6">
        <ScrollLink className="menu__links__link" to="catalogue">
          О нас
        </ScrollLink>
      </div>
      <div className="menu__links flex flex-col items-end mt-6">
        <ScrollLink className="menu__links__link" to="contacts">
          Контакты
        </ScrollLink>
      </div>
      <a href="tel:+77066018826" className="menu__contact mt-6">
        +7 706 601 88-26
      </a>
      <a href="mailto:ceo@sungrain.kz" className="menu__contact mt-4">
        ceo@sungrain.kz
      </a>
    </div>
  );
};
