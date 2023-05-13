import styled from "styled-components";
import { Container } from "App/shared/Container/Container";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1000;
  overflow: auto;

  background: #0d0b0b;
`;

export const Wrapper = styled(Container)`
  pointer-events: none;
`;
