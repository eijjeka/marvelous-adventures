import { Container } from "App/shared/Container/Container";
import { HeroSection } from "App/components/Hero/Hero.styled";
import { HeroItem } from "./HeroItem";
import styled from "styled-components";
import heros from "App/assets/data/hero.json";
console.log("heros: ", heros);

const SliderList = styled.ul`
  list-style: none;
`;

export const Hero = () => {
  const aria = "true";

  const result = aria === "true";
  console.log("result: ", result);

  return (
    <HeroSection padding={"92px 0 80px"} bgc={"#0C0B0B"}>
      <Container>
        <SliderList>
          {heros && heros.map((hero) => <HeroItem {...hero} />)}
        </SliderList>
      </Container>
    </HeroSection>
  );
};
