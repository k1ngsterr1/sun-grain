import Hamburger from "hamburger-react";
import { Logo } from "../../../shared/ui/Logo";
import { useSelector } from "react-redux";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";
import { Link } from "react-scroll";

import "./styles.scss";

export const Header = () => {
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
  const openMenu = useOpenMenu(isMenuOpen);

  return (
    <>
      <header className="header flex justify-between items-center">
        <Logo />
        <div className="header__hamburger-btn">
          <Hamburger color="#e55b12" onToggle={openMenu} toggled={isMenuOpen} />
        </div>
      </header>
      <header className="header-pc flex justify-between items-center">
        <nav className="header-pc__navigation flex justify-between items-center">
          <Logo />
          <Link to="main" className="header-pc__navigation__link" smooth>
            Наш каталог
          </Link>
          <Link to="about" className="header-pc__navigation__link" smooth>
            О компании
          </Link>
          <Link to="catalogue" className="header-pc__navigation__link" smooth>
            Каталог
          </Link>
          <Link to="contacts" className="header-pc__navigation__link" smooth>
            Контакты
          </Link>
          <a
            href="tel:+77066018826"
            className="header-pc__navigation__contact-link"
          >
            +7 706 601 88-26
          </a>
          <a
            href="mailto:ceo@sungrain.kz"
            className="header-pc__navigation__contact-link"
          >
            ceo@sungrain.kz
          </a>
        </nav>
      </header>
    </>
  );
};
