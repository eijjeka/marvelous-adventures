import { StyledSection } from "./StyledSection";

export const Section = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>;
};
