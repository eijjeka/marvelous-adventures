import { StyledHeroButton } from "./Hero.styled";

export const HeroButton = ({ children, ...props }) => {
  let text;
  const hero = Object.keys(props)[0];
  console.log("hero: ", hero);
  switch (hero) {
    case "panther":
      text = "Black Panther";
      break;

    case "spider":
      text = "Spider man";
      break;

    case "hulk":
      text = "Hulk";
      break;

    default:
      text = "Black Panther";
  }

  return <StyledHeroButton {...props}>{text}</StyledHeroButton>;
};
