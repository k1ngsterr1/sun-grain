import React from "react";
import { Link } from "react-scroll";

import "./styles.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: string;
  margin?: string;
}

interface ScrollButtonProps {
  text: string;
  to: string;
  margin?: string;
  buttonType?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, margin, buttonType, ...props }, ref) => {
    return (
      <button {...props} ref={ref} className={`button ${buttonType} ${margin}`}>
        {text}
      </button>
    );
  }
);

export const ScrollButton: React.FC<ScrollButtonProps> = ({
  text,
  to,
  margin,
  buttonType,
}) => {
  return (
    <Link className={`button  ${margin} ${buttonType}`} to={to}>
      {text}
    </Link>
  );
};
