import { Form } from "@widgets/Form/ui";
import { Slide } from "react-awesome-reveal";

import "./styles.scss";

export const FormScreen = () => {
  return (
    <div className="form-screen flex flex-col items-center mt-12" id="contacts">
      <Slide triggerOnce>
        <h3 className="pt-6 text-center">Контакты</h3>
      </Slide>
      <Slide triggerOnce direction="right">
        <p className="paragraph mt-5">
          С собственным производством и отлаженной логистикой, мы способны
          оперативно удовлетворять запросы наших клиентов.
        </p>
      </Slide>
      <Form />
    </div>
  );
};
