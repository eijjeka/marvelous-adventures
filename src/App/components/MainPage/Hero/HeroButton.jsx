import { StyledHeroButton } from "./Hero.styled";

export const HeroButton = ({ children, colors }) => {
  return <StyledHeroButton {...colors}>{children}</StyledHeroButton>;
};
