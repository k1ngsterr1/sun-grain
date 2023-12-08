import { Feature } from "@features/Feature";
import {
  faCartShopping,
  faMoneyBill,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

import about from "@assets/images/about_image.webp";

import "./styles.scss";
import { Slide } from "react-awesome-reveal";

export const AboutScreen = () => {
  return (
    <>
      <div className="about-screen mt-12">
        <div className="container">
          <Slide triggerOnce>
            <h2 className="second-heading mt-8 mb-8">О компании Sun Grain</h2>
          </Slide>
          <Slide direction="right" triggerOnce>
            <p className="paragraph mb-4">
              ТОО «SUN GRAIN» предлагает широкий ассортимент продуктов перемола,
              включая муку различных видов, крупы и другие продукты,
              спроектированные для того, чтобы соответствовать самым высоким
              ожиданиям наших клиентов. Мы тщательно отбираем поставщиков и
              следим за производственными процессами, чтобы уверенно
              предоставлять продукцию выдающегося качества.
              <br />
              <br />
              Наша миссия - делать Ваш повседневный опыт кулинарии незабываемым,
              предоставляя продукты, которые сочетают в себе исключительный вкус
              и высшие стандарты качества.
            </p>
          </Slide>
          <div className="w-full flex items-center justify-between gap-5 mt-8">
            <Feature name="Гарантированное качество" icon={faStar} />
            <Feature name="Разнообразие продукции" icon={faCartShopping} />
          </div>
          <div className="w-full flex items-center justify-between gap-4 mt-5">
            <Feature
              name="Ответственность перед клиентами"
              icon={faHandshake}
            />
            <Feature
              name="Конкурентоспособные цены
            "
              icon={faMoneyBill}
            />
          </div>
          <img
            src={about}
            className="about-image mt-12 mb-8"
            alt="about-image"
          />
        </div>
        <div className="container-pc">
          {" "}
          <Slide triggerOnce>
            <h2 className="second-heading mt-8 mb-8">О компании Sun Grain</h2>
          </Slide>
          <Slide direction="right" triggerOnce>
            <p className="paragraph w-[50%] m-auto mb-4">
              ТОО «SUN GRAIN» предлагает широкий ассортимент продуктов перемола,
              включая муку различных видов, крупы и другие продукты,
              спроектированные для того, чтобы соответствовать самым высоким
              ожиданиям наших клиентов. Мы тщательно отбираем поставщиков и
              следим за производственными процессами, чтобы уверенно
              предоставлять продукцию выдающегося качества.
              <br />
              <br />
              Наша миссия - делать Ваш повседневный опыт кулинарии незабываемым,
              предоставляя продукты, которые сочетают в себе исключительный вкус
              и высшие стандарты качества.
            </p>
          </Slide>
          <div className="w-[auto] flex items-center justify-between gap-5 mt-8">
            <Feature name="Гарантированное качество" icon={faStar} />
            <Feature name="Разнообразие продукции" icon={faCartShopping} />
          </div>
          <div className="w-[auto] flex items-center justify-between gap-4 mt-5 mb-12">
            <Feature
              name="Ответственность перед клиентами"
              icon={faHandshake}
            />
            <Feature
              name="Конкурентоспособные цены
            "
              icon={faMoneyBill}
            />
          </div>
        </div>
      </div>
    </>
  );
};
