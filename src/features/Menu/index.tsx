import { Link as ScrollLink } from "react-scroll";
import { Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";

import "./styles.scss";

export const Menu = () => {
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
  const closeMenu = useOpenMenu(isMenuOpen);

  return (
    <>
      <Slide direction="left" className="z-10 absolute w-full h-full">
        <div className="menu flex flex-col items-end mt-16">
          <div className="menu__links flex flex-col items-end mt-6">
            <ScrollLink
              className="menu__links__link"
              to="main-mob"
              smooth
              onClick={closeMenu}
            >
              Главная
            </ScrollLink>
          </div>

          <div className="menu__links flex flex-col items-end mt-6">
            <ScrollLink
              className={"menu__links__link"}
              to="catalogue-mob"
              smooth
              onClick={closeMenu}
            >
              Каталог
            </ScrollLink>
          </div>
          <div className="menu__links flex flex-col items-end mt-6">
            <ScrollLink
              className="menu__links__link"
              to="about-mob"
              smooth
              onClick={closeMenu}
            >
              О нас
            </ScrollLink>
          </div>
          <div className="menu__links flex flex-col items-end mt-6">
            <ScrollLink
              className="menu__links__link"
              to="form"
              smooth
              onClick={closeMenu}
            >
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
      </Slide>
    </>
  );
};
