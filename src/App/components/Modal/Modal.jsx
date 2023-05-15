import { createPortal } from "react-dom";
import { Overlay, Wrapper } from "./Modal.styled";

export const Modal = ({ active, setActive, children }) => {
  return createPortal(
    <Overlay onClick={() => setActive(false)}>
      <Wrapper onClick={(e) => console.log(e)}>{children}</Wrapper>
    </Overlay>,
    document.getElementById("portal")
  );
};
