import { StyledButton } from "./Button.styled";

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
