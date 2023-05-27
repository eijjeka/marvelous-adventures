import { Container } from "App/shared/Container/Container";

import {
  HeroWrapper,
  PreTitle,
  Title,
  Description,
  WrapperBtn,
  ScrollDownBtn,
} from "./Hero.styled";
import { useRef } from "react";

export const Hero = () => {
  const wrapper = useRef();

  const handleClick = () => {
    const offsetPosition = wrapper.current.offsetHeight - 83;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <HeroWrapper ref={wrapper}>
      <Container>
        <PreTitle>Web-based platform </PreTitle>
        <Title>Characters</Title>
        <Description>
          {" "}
          With over 70,000 characters in the Marvel Multiverse, this is the most
          complete public listing in existence.
        </Description>
        <WrapperBtn>
          <ScrollDownBtn onClick={handleClick}>Scroll down</ScrollDownBtn>
        </WrapperBtn>
      </Container>
    </HeroWrapper>
  );
};
