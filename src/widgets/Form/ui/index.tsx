import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/Input";
import { Slide } from "react-awesome-reveal";

export const Form = () => {
  return (
    <form className="form w-full flex flex-col items-center mb-10">
      <Slide triggerOnce className="w-full">
        <div className="w-full flex justify-center mt-8">
          <Input placeholder="Введите ваше имя" />
        </div>
      </Slide>
      <Slide triggerOnce className="w-full" direction="right">
        <div className="w-full flex justify-center mt-5">
          <Input placeholder="Ваш номер телефона" />
        </div>
      </Slide>
      <Slide triggerOnce className="w-full">
        <div className="w-full flex justify-center mt-5">
          <Input placeholder="Ваш почтовый адресс" />
        </div>
      </Slide>
      <Slide
        triggerOnce
        className="w-full flex items-center justify-center"
        direction="right"
      >
        <Button text="Отправить" buttonType="outline" margin="mt-8" />
      </Slide>
    </form>
  );
};
