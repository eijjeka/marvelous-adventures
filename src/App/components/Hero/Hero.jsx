import { Container } from "App/shared/Container/Container";
import { Button } from "App/shared/Button/Button";
import {
  HeroSection,
  StyledImage,
  SubTitle,
  MainTitle,
  DescriptionWrapper,
  WrapperImages,
} from "App/components/Hero/Hero.styled";

import { HeroButton } from "./HeroButton";

import {
  StyledWrapperImg,
  StyledWrapperBtn,
  StyledGradientBg,
  ColorButton,
  WrapForMainContent,
} from "./Hero.styled";

import pathImgBlack1 from "App/assets/images/black-1.jpg";
import pathImgBlack1_2x from "App/assets/images/black-1@2x.jpg";
import pathImgBlack2 from "App/assets/images/black-m-2.jpg";
import pathImgBlack2_2x from "App/assets/images/black-m-2@2x.jpg";

export const Hero = () => {
  return (
    <HeroSection padding={"92px 0 80px"} bgc={"#0C0B0B"}>
      <Container>
        <WrapForMainContent>
          <SubTitle class="subtitle">Web-based platform</SubTitle>
          <MainTitle>Marvelous Adventures</MainTitle>
          <p class="hero-text">
            is a web-based platform that provides an immersive experience for
            users to explore and discover a vast collection of Marvel characters
            and comics. Start exploring the Marvelous Adventures now by visiting
            our Characters and Comics sections and discover your new favorites
            today.
          </p>
          <StyledWrapperBtn>
            <ColorButton panther mr={"8px"}>
              Characters
            </ColorButton>
            <Button border={"1px solid rgba(250, 250, 250, 0.5);"}>
              Comics
            </Button>
          </StyledWrapperBtn>
        </WrapForMainContent>
        <WrapperImages dis={"flex"} fldir={"column"}>
          <StyledImage
            srcSet={`${pathImgBlack1} 1x, ${pathImgBlack1_2x} 2x`}
            src={pathImgBlack1}
            alt="hero black"
            width={237}
            height={343}
          />
          <StyledWrapperImg>
            <StyledImage
              srcSet={`${pathImgBlack2} 1x, ${pathImgBlack2_2x} 2x`}
              src={pathImgBlack2}
              alt="hero black"
              width={237}
              height={343}
            />
            <HeroButton panther>Black Panther</HeroButton>
            <span></span>
            <DescriptionWrapper>
              <h2>Characters</h2>
              <p class="description-hero">
                T’Challa is the king of the secretive and highly advanced
                African nation of Wakanda - as well as the powerful warrior
                known as the Black Panther.
              </p>
            </DescriptionWrapper>
          </StyledWrapperImg>
          <StyledGradientBg panther />
        </WrapperImages>
      </Container>
    </HeroSection>
  );
};
