import { useNavigate } from "react-router-dom";
import logo from "@assets/images/logo.svg";

import "./styles.scss";

export const Logo = () => {
  const navigate = useNavigate();

  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    navigate("/home");
  }

  return (
    <>
      <img onClick={scrollToTop} src={logo} alt="logo" className="logo" />
    </>
  );
};
