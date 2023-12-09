import { Form } from "@widgets/Form/ui";
import "./styles.scss";

export const FormScreen = () => {
  return (
    <div className="form-screen flex flex-col items-center mt-12" id="form">
      <h3 className="pt-6 text-center">Контакты</h3>
      <p className="paragraph mt-5 w-[40%]">
        Если у Вас есть вопросы, предложения или Вы хотели бы сотрудничать с
        нами, свяжитесь с нашей командой. Мы всегда готовы предоставить Вам
        необходимую информацию и поддержку. Присоединяйтесь к SUN GRAIN и
        откройте для себя мир качественных продуктов, приготовленных с любовью и
        заботой о Вашем здоровье!
      </p>
      <Form />
    </div>
  );
};
