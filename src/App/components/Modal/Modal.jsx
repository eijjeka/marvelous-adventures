import { createPortal } from "react-dom";
import { Backdrop, Wrapper } from "./Modal.styled";
import { useRef } from "react";

export const Modal = ({ setActive, children }) => {
  const overlay = useRef();

  const handleOverlay = (e) => {
    if (e.target === overlay.current) {
      setActive(false);
    }
  };

  return createPortal(
    <Backdrop ref={overlay} onClick={(e) => handleOverlay(e)}>
      {children}
    </Backdrop>,
    document.getElementById("portal")
  );
};
