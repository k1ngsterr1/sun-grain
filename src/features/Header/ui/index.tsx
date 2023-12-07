import Hamburger from "hamburger-react";
import { Logo } from "../../../shared/ui/Logo";
import { useSelector } from "react-redux";
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";
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
      <header className="header-pc flex justify-between items-center"></header>
    </>
  );
};
