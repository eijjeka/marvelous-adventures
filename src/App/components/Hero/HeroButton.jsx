import { StyledHeroButton } from "./Hero.styled";

export const HeroButton = ({ children, ...props }) => {
  return <StyledHeroButton {...props}>{children}</StyledHeroButton>;
};
