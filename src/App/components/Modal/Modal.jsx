import { createPortal } from "react-dom";
import { Overlay, Wrapper } from "./Modal.styled";
import { useRef } from "react";

export const Modal = ({ setActive, children }) => {
  const overlay = useRef();

  const handleOverlay = (e) => {
    if (e.target === overlay.current) {
      setActive(false);
    }
  };

  return createPortal(
    <Overlay onClick={(e) => handleOverlay(e)}>
      <Wrapper ref={overlay}>{children}</Wrapper>
    </Overlay>,
    document.getElementById("portal")
  );
};
