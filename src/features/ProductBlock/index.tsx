import React from "react";
import { UtilityButton } from "@shared/ui/UtilityButton";

import "./styles.scss";

interface ProductDetails {
  detailItem: string;
}

interface ProductBlockProps {
  blockHeading: string;
  productName?: string;
  productType: string;
  productPhoto: string;
  productPrice: string;
  details: ProductDetails[];
  onClick: () => void;
}

export const ProductBlock: React.FC<ProductBlockProps> = ({
  blockHeading,
  productName,
  productType,
  productPhoto,
  productPrice,
  details,
  onClick,
}) => {
  return (
    <section className="flex bg-slate-100 p-8  justify-between w-[47%] rounded-md mt-10">
      <img
        src={productPhoto}
        className="product-photo rounded-md"
        alt={productName}
      />
      <div className="product-section flex flex-col">
        <span className="product-section__heading">{blockHeading}</span>
        <span className="product-section__product-name mt-3">
          {productType} {productName}
        </span>
        <span className="product-section__details-heading mt-4">
          Характеристики:
        </span>
        {details && details.length > 0 && (
          <ol className="text-left mt-2">
            {details.map((item, index) => (
              <li key={index} className="detail-item mt-2">
                {item.detailItem}
              </li>
            ))}
          </ol>
        )}
        <UtilityButton
          text={productPrice}
          type="filled mt-4"
          width="auto"
          onClick={onClick}
        />
      </div>
    </section>
  );
};
