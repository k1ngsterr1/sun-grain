import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export interface SendFormData {
  full_name: string;
  phone_number: string;
  email: string;
}

export function useSendEmail(productFromRedux: string) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendFormData>({
    mode: "onChange",
  });

  const onSubmit = (data: SendFormData, event?: React.BaseSyntheticEvent) => {
    if (event) {
      event.preventDefault();
    }

    const formData = {
      ...data,
      product: productFromRedux,
    };

    emailjs
      .send(
        "service_zo7ktme",
        "template_wls321b",
        formData,
        "4JH0nukWpbbxqO4Tw"
      )
      .then(
        (result: any) => {
          console.log("Email successfully sent!", result.text, formData);
          reset();
        },
        (error) => {
          console.error("Failder to send email:", error.text);
        }
      );
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
}
