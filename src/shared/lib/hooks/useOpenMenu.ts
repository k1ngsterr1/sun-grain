import { toggleMenu } from "@redux/menuSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useOpenMenu = (isOpen: boolean) => {
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return openMenu;
};
