import { useNavigate } from "react-router-dom";
import logo from "@assets/images/logo.svg";

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
