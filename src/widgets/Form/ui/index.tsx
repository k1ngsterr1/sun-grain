import { useOpenPopup } from "@shared/lib/hooks/useOpenPopup";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/Input";
import { ModalWindow } from "@widgets/ModalWindow/ui";
import { useSelector } from "react-redux";

export const Form = () => {
  const productFromRedux = useSelector(
    (state: any) => state.product.productState
  );

  const isPopupOpen = useSelector((state: any) => state.popup.isOpen);

  const { handleSubmit } = useSendEmail();

  const onFormSubmit = (data: any) => {
    handleSubmit(data);
    useOpenPopup();
    console.log(useOpenPopup, isPopupOpen);
  };

  return (
    <>
      <form
        className="form w-full flex flex-col items-center"
        onSubmit={onFormSubmit}
      >
        <div className="w-full flex justify-center mt-8">
          <Input
            placeholder="Введите ваше имя"
            type="text"
            required
            name="full_name"
          />
        </div>
        <div className="w-full flex justify-center mt-5">
          <Input
            placeholder="Ваш номер телефона"
            type="text"
            required
            name="phone_number"
          />
        </div>
        <div className="w-full flex justify-center mt-5">
          <Input
            placeholder="Ваш электронный адрес"
            type="email"
            required
            name="email"
          />
        </div>
        <div className="w-full flex justify-center mt-5">
          <Input value={productFromRedux || ""} type="hidden" name="product" />
        </div>
        <Button text="Отправить" buttonType="outline" margin="mt-8 mb-16" />
      </form>
      <ModalWindow open={isPopupOpen} />
    </>
  );
};
