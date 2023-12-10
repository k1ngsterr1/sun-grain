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
      <Slide direction="right" className="z-10 absolute w-full h-full">
        <div className="menu flex flex-col items-end mt-16">
          <Slide direction="right" delay={100}>
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
          </Slide>
          <div className="menu__links flex flex-col items-end mt-6">
            <Slide delay={300} direction="right">
              <ScrollLink
                className={"menu__links__link"}
                to="catalogue-mob"
                smooth
                onClick={closeMenu}
              >
                Каталог
              </ScrollLink>
            </Slide>
          </div>
          <div className="menu__links flex flex-col items-end mt-6">
            <Slide direction="right" delay={400}>
              <ScrollLink
                className="menu__links__link"
                to="about-mob"
                smooth
                onClick={closeMenu}
              >
                О нас
              </ScrollLink>
            </Slide>
          </div>
          <div className="menu__links flex flex-col items-end mt-6">
            <Slide direction="right" delay={500}>
              <ScrollLink
                className="menu__links__link"
                to="form"
                smooth
                onClick={closeMenu}
              >
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
