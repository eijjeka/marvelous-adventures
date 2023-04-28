import { Container } from "App/shared/Container/Container";
import { HeroSection } from "App/components/Hero/Hero.styled";
import { HeroItem } from "./HeroItem";
import styled from "styled-components";

const SliderList = styled.ul`
  list-style: none;
`;

export const Hero = () => {
  return (
    <HeroSection padding={"92px 0 80px"} bgc={"#0C0B0B"}>
      <Container>
        <SliderList>
          <HeroItem panther />
        </SliderList>
      </Container>
    </HeroSection>
  );
};
