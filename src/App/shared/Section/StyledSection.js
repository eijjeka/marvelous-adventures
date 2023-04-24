import styled from "styled-components";

export const StyledSection = styled.section`
  padding: ${({ padding }) => padding || 0};
  background-color: ${({ bgc }) => bgc};
`;
