import React from "react";

import "./styles.scss";

interface UtilityButtonProps {
  text: string;
  type: string;
  width: string;
  onClick: () => void;
}

export const UtilityButton: React.FC<UtilityButtonProps> = ({
  text,
  type,
  width,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`utility-btn--${type} ${width}`}>
      {text}
    </button>
  );
};
