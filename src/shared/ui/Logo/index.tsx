import logo from "@assets/logo.svg";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export const Logo = () => {
  const navigate = useNavigate();

  function navigateToMain() {
    navigate("/");
  }

  return (
    <>
      <img onClick={navigateToMain} src={logo} alt="logo" className="logo" />
    </>
  );
};
