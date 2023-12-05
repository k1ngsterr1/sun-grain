import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/Input";

export const Form = () => {
  return (
    <form className="form w-full flex flex-col items-center mb-10">
      <div className="w-full flex justify-center mt-8">
        <Input placeholder="Введите ваше имя" />
      </div>
      <div className="w-full flex justify-center mt-5">
        <Input placeholder="Ваш номер телефона" />
      </div>
      <div className="w-full flex justify-center mt-5">
        <Input placeholder="Ваш почтовый адресс" />
      </div>
      <Button text="Отправить" buttonType="outline" margin="mt-8" />
    </form>
  );
};
