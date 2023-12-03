import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu as DropMenu } from "@headlessui/react";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";

export const Menu = () => {
  const navigate = useNavigate();

  function navigateTo(url: string) {
    navigate(url);
  }

  return (
    <>
      <Slide direction="right" className="z-10 absolute w-full h-full">
        <div className="menu flex flex-col items-end">
          <Slide direction="right" delay={100}>
            <div className="menu__links flex flex-col items-end mt-6">
              <ScrollLink className="menu__links__link" to="main">
                Главная
              </ScrollLink>
            </div>
          </Slide>
          <div className="menu__links flex flex-col items-end mt-6">
            <DropMenu>
              <Slide delay={300} direction="right">
                <DropMenu.Button className={"menu__links__link"}>
                  Каталог
                </DropMenu.Button>
              </Slide>
              <DropMenu.Items className={"flex flex-col items-end"}>
                <Slide delay={100} direction="right" className="mt-3">
                  <DropMenu.Item>
                    {({ active }) => (
                      <Link
                        className={`menu__links__sub-link mt-3`}
                        to={"/catalogue"}
                      >
                        Мука
                      </Link>
                    )}
                  </DropMenu.Item>
                </Slide>
                <DropMenu.Item>
                  {({ active }) => (
                    <Link
                      className={`menu__links__sub-link mt-2`}
                      to={"/catalogue"}
                    >
                      Гречка
                    </Link>
                  )}
                </DropMenu.Item>
                <DropMenu.Item>
                  {({ active }) => (
                    <Link
                      className={`menu__links__sub-link mt-2`}
                      to={"/catalogue"}
                    >
                      Отруби пшеничные
                    </Link>
                  )}
                </DropMenu.Item>
                <DropMenu.Item>
                  {({ active }) => (
                    <Link
                      className={`menu__links__sub-link mt-2`}
                      to={"/catalogue"}
                    >
                      Отруби пшеничные
                    </Link>
                  )}
                </DropMenu.Item>
              </DropMenu.Items>
            </DropMenu>
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
          <a href="tel:+77066018826" className="menu__contact">
            +7 706 601 88-26
          </a>
          <a href="mailto:ceo@sungrain.kz" className="menu__contact mt-4">
            ceo@sungrain.kz
          </a>
        </div>
      </Slide>
    </>
  );
};
