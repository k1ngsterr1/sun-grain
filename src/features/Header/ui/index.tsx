import Hamburger from "hamburger-react";
import { Logo } from "../../../shared/ui/Logo";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header flex justify-between items-center">
      <Logo />
      <div className="header__hamburger-btn">
        <Hamburger color="#e55b12" />
      </div>
    </header>
  );
};
