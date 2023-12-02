import React from "react";
import "./styles.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, buttonType, ...props }, ref) => {
    return (
      <button {...props} ref={ref} className={`button  ${buttonType},`}>
        {text}
      </button>
    );
  }
);
