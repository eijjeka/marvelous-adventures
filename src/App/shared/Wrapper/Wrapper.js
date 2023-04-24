import { StyledWrapper } from "./Wrapper.styled";

export const Wrapper = ({ children, ...props }) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};
