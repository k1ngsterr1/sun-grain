import { setOpen } from "@redux/popupSlice";
import { useDispatch } from "react-redux";

export const useOpenPopup = () => {
  const dispatch = useDispatch();

  const openPopup = () => {
    dispatch(setOpen());
  };

  return openPopup;
};
