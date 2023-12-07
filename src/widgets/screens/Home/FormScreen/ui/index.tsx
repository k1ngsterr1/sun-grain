import { Form } from "@widgets/Form/ui";
import "./styles.scss";

export const FormScreen = () => {
  return (
    <div className="form-screen flex flex-col items-center mt-12">
      <h3 className="pt-6 text-center">Контакты</h3>
      <p className="paragraph mt-5 w-[40%]">
        С собственным производством и отлаженной логистикой, мы способны
        оперативно удовлетворять запросы наших клиентов.
      </p>
      <Form />
    </div>
  );
};
