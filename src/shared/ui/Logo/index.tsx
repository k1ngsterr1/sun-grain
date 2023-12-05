import { useNavigate } from "react-router-dom";
import logo from "@assets/images/logo.svg";

import "./styles.scss";

interface LogoProps {
  size?: null | string;
}

export const Logo: React.FC<LogoProps> = ({ size }) => {
  const navigate = useNavigate();

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    navigate("/home");
  }

  return (
    <>
      <img
        onClick={scrollToTop}
        src={logo}
        alt="logo"
        className={`logo ${size}`}
      />
    </>
  );
};
