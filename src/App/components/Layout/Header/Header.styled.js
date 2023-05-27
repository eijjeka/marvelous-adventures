import styled from "styled-components";
import { Container } from "App/shared/Container/Container";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: ${({ scroll }) => (scroll ? "rgba(0, 0, 0, 1)" : "transparent")};
  transition: background 250ms linear;
  backface-visibility: hidden;

  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
