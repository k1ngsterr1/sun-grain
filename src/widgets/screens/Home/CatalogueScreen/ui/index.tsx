import { Gallery } from "@features/Gallery";
import { Card } from "@features/Card/ui";
import { scroller } from "react-scroll";
import { useDispatch } from "react-redux";
import { setProduct } from "@redux/productSlice";
import { ProductBlock } from "@features/ProductBlock";

// Assets
import flour from "@assets/images/cards/flour.webp";
import flour02 from "@assets/images/cards/flour02.webp";
import pizza_flour from "@assets/images/cards/pizza.webp";
import buckwheat from "@assets/images/cards/buckwheat.webp";

export const CatalogueScreen = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (newProductValue: string, elementId: string) => {
    dispatch(setProduct(newProductValue));

    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

  return (
    <>
      <div className="container" id="catalogue-mob">
        <h2 className="second-heading mt-0 mb-1">Каталог</h2>
        <Gallery />
      </div>
      <div className="container-pc" id="catalogue">
        <h2 className="second-heading mt-0 mb-8">Каталог</h2>
        <div className="w-[86%] flex items-center justify-between">
          <ProductBlock
            blockHeading="Мука высший сорт"
            productType=""
            productName="Русское поле, 50кг"
            productPhoto={flour}
            details={[
              { detailItem: "Цвет: Белый с кремовым оттенком" },
              { detailItem: "Число падения: 240" },
              { detailItem: "Белизна: 56 усл. ед." },
              { detailItem: "Массовая доля влаги: 14.6%" },
              { detailItem: "Клейковина: 28%" },
              { detailItem: "ИДК: 70-75 ед." },
            ]}
            onClick={() => handleButtonClick("Мука русское поле, 50кг", "form")}
            productPrice="11.500₸"
          />
          <ProductBlock
            blockHeading="Мука высший сорт"
            productType=""
            productName="Крепчатка Золотая, 50кг"
            productPhoto={flour02}
            details={[
              { detailItem: "Цвет: Белый с кремовым оттенком" },
              { detailItem: "Число падения: 240" },
              { detailItem: "Белизна: 60 усл. ед." },
              { detailItem: "Массовая доля влаги: 14.8%" },
              { detailItem: "Клейковина: 28-30%" },
              { detailItem: "ИДК: 55-65 ед." },
            ]}
            onClick={() => handleButtonClick("Мука русское поле, 50кг", "form")}
            productPrice="14.500₸"
          />
        </div>
        <div className="w-[86%] flex items-center justify-between">
          <ProductBlock
            blockHeading="Мука для пиццы"
            productType=""
            productName="Крупчатка Золотая, 25кг"
            productPhoto={pizza_flour}
            details={[
              { detailItem: "Цвет: Белый с кремовым оттенком" },
              { detailItem: "Число падения: 270" },
              { detailItem: "Белизна: 65 усл. ед." },
              { detailItem: "Массовая доля влаги: 14.8%" },
              { detailItem: "Клейковина: 28%" },
              { detailItem: "ИДК: 55-60 ед." },
              { detailItem: "W (энергия деформации): 320" },
            ]}
            onClick={() => handleButtonClick("Мука русское поле, 50кг", "form")}
            productPrice="10.000₸"
          />
          <ProductBlock
            blockHeading="Крупа Гречневая"
            productType="Ядрица"
            productName=""
            productPhoto={buckwheat}
            details={[
              { detailItem: "Сорт: Первый" },
              { detailItem: "Эн.Ценность (ккал): 335" },
              { detailItem: "Белки: 12.6г." },
              { detailItem: "Жиры: 3.3г" },
              { detailItem: "Углеводы: 62.1г" },
              { detailItem: "Срок хранения 20 мес." },
              { detailItem: "Масса: 25кг" },
            ]}
            onClick={() =>
              handleButtonClick("Крупа Гречневая Ядрица, 25кг", "form")
            }
            productPrice="7.500₸"
          />
        </div>
      </div>
    </>
  );
};
