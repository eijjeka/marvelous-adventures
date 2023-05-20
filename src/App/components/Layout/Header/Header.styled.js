import styled from "styled-components";
import { Container } from "App/shared/Container/Container";

export const Wrapper = styled.header`
  position: ${({ scroll }) => (scroll ? "sticky" : "relative")};
  top: 0;
  z-index: 100;
  background: ${({ scroll }) => (scroll ? "rgba(0, 0, 0, 1)" : "")};
  transition: background 250ms linear;
`;

export const InnerWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
