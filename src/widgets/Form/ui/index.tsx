import { Input } from "@shared/ui/Input";

export const Form = () => {
  return (
    <form className="form w-full flex flex-col items-center">
      <Input placeholder="Введите ваше имя" />
    </form>
  );
};
