import { StyledHeroButton } from "./Hero.styled";

export const HeroButton = ({ children, colors }) => {
  console.log("props: ", colors);

  return <StyledHeroButton {...colors}>{children}</StyledHeroButton>;
};
