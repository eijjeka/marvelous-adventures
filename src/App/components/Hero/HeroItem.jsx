import { Button } from "App/shared/Button/Button";
import { HeroButton } from "./HeroButton";

import {
  StyledWrapperImg,
  StyledWrapperBtn,
  StyledGradientBg,
  ColorButton,
  WrapForMainContent,
  StyledImage,
  SubTitle,
  MainTitle,
  DescriptionWrapper,
  WrapperImages,
} from "./Hero.styled";

import getPathImg from "App/services/getPathImg";
import styled from "styled-components";

const Item = styled.li``;

export const HeroItem = ({ name, colors, description }) => {
  return (
    <Item>
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
          <ColorButton colorBg={colors.main} mr={"8px"}>
            Characters
          </ColorButton>
          <Button
            colorBg={colors.main}
            border={"1px solid rgba(250, 250, 250, 0.5);"}
          >
            Comics
          </Button>
        </StyledWrapperBtn>
      </WrapForMainContent>
      <WrapperImages dis={"flex"} fldir={"column"}>
        <StyledImage
          srcSet={`${getPathImg.panther1} 1x, ${getPathImg.panther1_2x} 2x`}
          src={getPathImg.panther1}
          alt="hero panther"
          width={237}
          height={343}
        />
        <StyledWrapperImg>
          <StyledImage
            srcSet={`${getPathImg.panther2} 1x, ${getPathImg.panther2_2x} 2x`}
            src={getPathImg.panther2}
            alt="hero black"
            width={237}
            height={343}
          />
          <HeroButton colors={colors}>{name}</HeroButton>
          <span></span>
          <DescriptionWrapper>
            <h2>Characters</h2>
            <p class="description-hero">{description}</p>
          </DescriptionWrapper>
        </StyledWrapperImg>
        <StyledGradientBg colorBg={colors.gradientBg} />
      </WrapperImages>
    </Item>
  );
};
