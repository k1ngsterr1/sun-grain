import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export interface SendFormData {
  full_name: string;
  phone_number: string;
  email: string;
}

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<SendFormData>({
    mode: "onChange",
  });

  const onSubmit = (data: SendFormData, event?: React.BaseSyntheticEvent) => {
    if (event) {
      event.preventDefault();
    }

    emailjs
      .sendForm("service_template", "template_key", event?.target, "secter-key")
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
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
