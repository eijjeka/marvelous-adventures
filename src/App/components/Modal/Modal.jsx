import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Backdrop } from "./Modal.styled";
import { useRef } from "react";

export const Modal = ({ setActive, children }) => {
  const overlay = useRef();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
