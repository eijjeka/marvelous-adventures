import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1000;
  overflow: auto;
  background: #0d0b0b;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;
