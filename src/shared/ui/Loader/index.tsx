import logo from "@assets/images/logo_white.svg";

import "./styles.scss";

export const Loader = () => {
  return (
    <div className="loader flex flex-column items-center justify-center">
      <img src={logo} className="loader__logo" alt="logo" />
      <p className="loader__text mt-8">
        Ваш Надежный Партнер в Поставке Качественной Продукции
      </p>
    </div>
  );
};
