import React from "react";
import Popup from "reactjs-popup";

export const ModalWindow = () => {
  return (
    <Popup>
      <div className="popup">
        <span className="popup__heading">Ваша заявка успешно отправлена</span>
        <p className="popup__paragraph">
          Наши менеджеры свяжутся с вами в скоромо времени
        </p>
      </div>
    </Popup>
  );
};
