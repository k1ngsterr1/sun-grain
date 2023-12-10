import { Logo } from "@shared/ui/Logo";
import { Link } from "react-scroll";

import logo from "@assets/images/spark_logo.svg";

import "./styles.scss";

export const Footer = () => {
  function SparkStudio() {
    window.open("https://sparkstudio.kz/", "_blank");
  }

  return (
    <footer className="footer">
      <div className="footer__mob flex flex-col items-center">
        <Logo size={"big"} />
        <Link to="main" className="footer__mob__link mt-8">
          Наша продукция
        </Link>
        <Link to="main" className="footer__mob__link mt-4">
          О компании{" "}
        </Link>
        <Link to="main" className="footer__mob__link mt-4">
          Каталог
        </Link>
        <Link to="main" className="footer__mob__link mt-4">
          Контакты
        </Link>
        <a href="tel:+77066018826" className="footer__mob__contact-link mt-5">
          +7 706 601 88-26
        </a>
        <a
          href="mailto:ceo@sungrain.kz"
          className="footer__mob__contact-link mt-2"
        >
          ceo@sungrain.kz
        </a>
        <img
          src={logo}
          alt="logo"
          className="footer__mob__logo mt-10 mb-10"
          onClick={SparkStudio}
        />
      </div>
      <div className="footer__pc flex items-center flex-col">
        <nav className="footer__pc__nav">
          <Logo size={"big"} />
          <Link to="main" className="footer__pc__nav__link" smooth>
            Наша продукция
          </Link>
          <Link to="about" className="footer__pc__nav__link" smooth>
            О компании
          </Link>
          <Link to="catalogue" className="footer__pc__nav__link" smooth>
            Каталог
          </Link>
          <Link to="contacts" className="footer__pc__nav__link" smooth>
            Контакты
          </Link>
          <a href="tel:+77066018826" className="footer__pc__nav__contact-link">
            +7 706 601 88-26
          </a>
          <a
            href="mailto:ceo@sungrain.kz"
            className="footer__pc__nav__contact-link"
          >
            ceo@sungrain.kz
          </a>
        </nav>
        <img
          src={logo}
          alt="logo"
          className="footer__pc__nav__logo mt-10 mb-10 cursor-pointer"
          onClick={SparkStudio}
        />
      </div>
    </footer>
  );
};
