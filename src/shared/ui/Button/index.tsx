import React from "react";
import "./styles.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: string;
  margin?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, margin, buttonType, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={`button  ${buttonType} ${margin}`}
      >
        {text}
      </button>
    );
  }
);
