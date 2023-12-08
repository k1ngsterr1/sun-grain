import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconLookup } from "@fortawesome/fontawesome-svg-core";

import "./styles.scss";

interface FeatureProps {
  name: string;
  icon: IconDefinition | IconLookup;
}

export const Feature: React.FC<FeatureProps> = ({ name, icon }) => {
  return (
    <div className={`feature flex flex-col items-center justify-center`}>
      <FontAwesomeIcon className="feature__icon" icon={icon} />
      <span className="feature__text text-center  mt-4">{name}</span>
    </div>
  );
};
