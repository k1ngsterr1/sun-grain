import { Header } from "@features/Header/ui";
import { Button } from "@shared/ui/Button/";
import { Slide } from "react-awesome-reveal";
import { Menu } from "@features/Menu";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { Gallery } from "@features/Gallery";

import "./styles.scss";

export const MainScreen = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <Header />
      {isMenuOpen && <Menu />}
      <main className="container">
        <Slide triggerOnce>
          <h1>SUN GRAIN</h1>
        </Slide>
        <Slide direction="right" triggerOnce>
          <p className="paragraph text-center">
            Ваш Надежный Партнер в Поставке Качественной Продукции
          </p>
        </Slide>
        <Slide direction="up" className="w-full" triggerOnce>
          <Gallery />
        </Slide>
        <Slide direction="up" delay={500} triggerOnce>
          <Button text="Вся продукция" margin="mt-10" buttonType="filled" />
        </Slide>
      </main>
    </>
  );
};
