import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";
import Popup from "reactjs-popup";

import { Button } from "@shared/ui/Button";

import "./styles.scss";

interface PopupProps {
  open: boolean;
}

export const ModalWindow: React.FC<PopupProps> = ({ open }) => {
  return (
    <>
      <Popup
        open={open}
        modal
        nested
        className="popup-container"
        position="center center"
        overlayStyle={{ background: "rgba(0,0,0,0.7)" }}
      >
        <Slide direction="up">
          <div className="popup-container__modal">
            <div className="popup-container__modal__content">
              <FontAwesomeIcon
                icon={faCheck}
                className="popup-container__modal__content__icon"
              />
              <h5 className="popup-container__modal__content__heading mt-4">
                Спасибо за вашу заявку!
              </h5>
              <p className="popup-container__modal__content__paragraph mt-4 w-[90%] text-center">
                В скором времени мы с вами свяжемся
              </p>
            </div>
          </div>
        </Slide>
      </Popup>
    </>
  );
};
