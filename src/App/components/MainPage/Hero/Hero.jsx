import { useEffect, useState } from "react";
import { Container } from "App/shared/Container/Container";
import { HeroSection } from "App/components/MainPage/Hero/Hero.styled";
import { HeroItem } from "./HeroItem";
import heros from "App/assets/data/hero.json";

export const Hero = () => {
  const [currentHero, setCurrentHero] = useState(heros[0]);

  useEffect(() => {
    const timerPagination = setInterval(() => {
      setCurrentHero((prevHero) => {
        const currentIndex = heros.findIndex(
          (hero) => hero.name === prevHero.name
        );

        const nextIndex = (currentIndex + 1) % heros.length;
        return heros[nextIndex];
      });
    }, 3500);

    return () => {
      clearInterval(timerPagination);
    };
  }, []);

  return (
    <HeroSection bgc={"#0C0B0B"}>
      <Container>{currentHero && <HeroItem {...currentHero} />}</Container>
    </HeroSection>
  );
};
