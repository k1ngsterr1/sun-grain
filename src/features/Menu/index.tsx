import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { Menu as DropMenu } from "@headlessui/react";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";

export const Menu = () => {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // function navigateTo(url: string) {
  //   navigate(url);
  // }

  function openCatalogue() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Slide direction="right" className="z-10 absolute w-full h-full">
        <div className="menu flex flex-col items-end mt-16">
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
                <DropMenu.Button
                  className={"menu__links__link"}
                  onClick={openCatalogue}
                >
                  Каталог{" "}
                </DropMenu.Button>
              </Slide>
              <DropMenu.Items className={"flex flex-col items-end"}>
                <Slide direction="right" className="mt-3">
                  <DropMenu.Item>
                    {({}) => (
                      <Link
                        className={`menu__links__sub-link mt-3`}
                        to={"/catalogue"}
                      >
                        Мука
                      </Link>
                    )}
                  </DropMenu.Item>
                </Slide>
                <Slide direction="right" className="mt-3">
                  <DropMenu.Item>
                    {({}) => (
                      <Link
                        className={`menu__links__sub-link mt-2`}
                        to={"/catalogue"}
                      >
                        Гречка
                      </Link>
                    )}
                  </DropMenu.Item>
                </Slide>
                <Slide direction="right" className="mt-3">
                  <DropMenu.Item>
                    {({}) => (
                      <Link
                        className={`menu__links__sub-link mt-2`}
                        to={"/catalogue"}
                      >
                        Крупа горох колотый
                      </Link>
                    )}
                  </DropMenu.Item>
                </Slide>
                <Slide direction="right" className="mt-3">
                  <DropMenu.Item>
                    {({}) => (
                      <Link
                        className={`menu__links__sub-link mt-2`}
                        to={"/catalogue"}
                      >
                        Отруби пшеничные
                      </Link>
                    )}
                  </DropMenu.Item>
                </Slide>
                <Slide direction="right" className="mt-3">
                  <DropMenu.Item>
                    {({}) => (
                      <Link
                        className={`menu__links__sub-link mt-2`}
                        to={"/catalogue"}
                      >
                        Крупо перловая
                      </Link>
                    )}
                  </DropMenu.Item>
                </Slide>
                <Slide direction="right" className="mt-3">
                  <DropMenu.Item>
                    {({}) => (
                      <Link
                        className={`menu__links__sub-link mt-2`}
                        to={"/catalogue"}
                      >
                        Крупа манная
                      </Link>
                    )}
                  </DropMenu.Item>
                </Slide>
                <Slide direction="right" className="mt-3">
                  <DropMenu.Item>
                    {({}) => (
                      <Link
                        className={`menu__links__sub-link mt-2`}
                        to={"/catalogue"}
                      >
                        Геркулес
                      </Link>
                    )}
                  </DropMenu.Item>
                </Slide>
                <Slide direction="right" className="mt-3">
                  <DropMenu.Item>
                    {({}) => (
                      <Link
                        className={`menu__links__sub-link mt-2`}
                        to={"/catalogue"}
                      >
                        Крупа ячневая
                      </Link>
                    )}
                  </DropMenu.Item>
                </Slide>
              </DropMenu.Items>
            </DropMenu>
          </div>
          <div className="menu__links flex flex-col items-end mt-6">
            <Slide direction="right" delay={400}>
              <ScrollLink className="menu__links__link" to="catalogue">
                О нас
              </ScrollLink>
            </Slide>
          </div>
          <div className="menu__links flex flex-col items-end mt-6">
            <Slide direction="right" delay={500}>
              <ScrollLink className="menu__links__link" to="contacts">
                Контакты
              </ScrollLink>
            </Slide>
          </div>
          <Slide direction="right" className="mt-6" delay={600}>
            <a href="tel:+77066018826" className="menu__contact">
              +7 706 601 88-26
            </a>
          </Slide>
          <Slide direction="right" className="mt-6" delay={700}>
            <a href="mailto:ceo@sungrain.kz" className="menu__contact mt-4">
              ceo@sungrain.kz
            </a>
          </Slide>
        </div>
      </Slide>
    </>
  );
};
