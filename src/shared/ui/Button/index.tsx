import React from "react";
import { Link } from "react-scroll";
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

interface LinkButtonProps {
  text: string;
  buttonType?: string;
  margin?: string;
  to: string;
}

export const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ to, text, margin, buttonType, ...props }) => {
    return (
      <Link
        {...props}
        className={`button flex items-center justify-center  ${buttonType} ${margin}`}
        to={to}
        smooth
      >
        {text}
      </Link>
    );
  }
);
