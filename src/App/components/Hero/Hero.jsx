import { Container } from "App/shared/Container/Container";
import { HeroSection } from "App/components/Hero/Hero.styled";
import { HeroItem } from "./HeroItem";
import heros from "App/assets/data/hero.json";
import { useEffect, useState } from "react";
console.log("heros: ", heros);

export const Hero = () => {
  const [currentHero, setCurrentHero] = useState(heros[0]);
  // console.log('currentHero: ', currentHero);

  useEffect(() => {
    const timerPagination = setInterval(() => {
      setCurrentHero((prevHero) => {
        const activeIndex = heros.findIndex(
          (hero) => hero.name === prevHero.name
        );

        if (activeIndex === heros.length - 1) {
          setCurrentHero(heros[0]);
          return;
        }

        const nextIndex = activeIndex + 1;
        return heros[nextIndex];
      });
    }, 3500);

    return () => {
      console.log("UNMOUNT");
      clearInterval(timerPagination);
    };
  }, []);

  return (
    <HeroSection padding={"92px 0 80px"} bgc={"#0C0B0B"}>
      <Container>
        {/* <SliderList> */}
        <HeroItem {...currentHero} />
        {/* </SliderList> */}
      </Container>
    </HeroSection>
  );
};
