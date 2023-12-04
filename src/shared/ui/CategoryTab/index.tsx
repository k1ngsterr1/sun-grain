import React from "react";

import "./styles.scss";

interface CategoryTabProps {
  text: string;
}

export const CategoryTab: React.FC<CategoryTabProps> = ({ text }) => {
  return <div className="category-tab">{text}</div>;
};
