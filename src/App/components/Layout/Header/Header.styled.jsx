import styled from "styled-components";
import { Container } from "App/shared/Container/Container";

export const Wrapper = styled.header`
  position: sticky;
`;

export const InnerWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
