import { Link, useLocation } from "react-router-dom";
import { Container } from "App/shared/Container/Container";
import heros from "App/assets/data/hero.json";
import { ComicsHeroSection } from "./ComicsHero.styled";
import { Button } from "./../../shared/Button/Button";
import { SubTitle, Title, Description } from "./ComicsHero.styled";
console.log("heros: ", heros);

export const ComicsHero = ({ state }) => {
  // const { state } = useLocation();
  const Location = useLocation();
  console.log("Location: ", Location);

  return (
    <ComicsHeroSection>
      <Container>
        <SubTitle>Web-based platform</SubTitle>
        <Title>Comics</Title>
        <Description>
          Comics is a medium used to express ideas with images, often combined
          with text or other visual information.{" "}
        </Description>
        <Button
          to={state ? state : "/"}
          display={"block"}
          width={"134px"}
          ml={"auto"}
          border={"1px solid rgba(250, 250, 250, 0.5);"}
        >
          Back home
        </Button>
      </Container>
    </ComicsHeroSection>
  );
};
