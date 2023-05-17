import styled from "styled-components";
import { Container } from "App/shared/Container/Container";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const InnerWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
