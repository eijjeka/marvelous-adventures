import { Container } from "App/shared/Container/Container";
import { HeroSection } from "App/components/Hero/Hero.styled";
import { HeroItem } from "./HeroItem";
import styled from "styled-components";
import heros from "App/assets/data/hero.json";
import { PaginationHeroPage } from "./PaginationHeroPage";
console.log("heros: ", heros);

const SliderList = styled.ul`
  list-style: none;
`;

export const Hero = () => {
  return (
    <HeroSection padding={"92px 0 80px"} bgc={"#0C0B0B"}>
      <Container>
        <SliderList>
          {heros && heros.map((hero) => <HeroItem {...hero} />)}
        </SliderList>
        <PaginationHeroPage heros={heros} />
      </Container>
    </HeroSection>
  );
};
