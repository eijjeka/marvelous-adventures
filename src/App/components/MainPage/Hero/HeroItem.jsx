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

import getPathImg from "App/services/getPathStaticImg";
import styled from "styled-components";
import { PaginationHeroPage } from "./PaginationHeroPage";

const Item = styled.div``;

export const HeroItem = ({ name, imgName, colors, description }) => {
  return (
    <Item>
      <WrapForMainContent>
        <SubTitle>Web-based platform</SubTitle>
        <MainTitle>Marvelous Adventures</MainTitle>
        <p className="hero-text">
          is a web-based platform that provides an immersive experience for
          users to explore and discover a vast collection of Marvel characters
          and comics. Start exploring the Marvelous Adventures now by visiting
          our Characters and Comics sections and discover your new favorites
          today.
        </p>
        <StyledWrapperBtn>
          <ColorButton colorBg={colors.main} mr={"8px"} to={"/characters"}>
            Characters
          </ColorButton>
          <Button
            to={"/comics"}
            colorBg={colors.main}
            border={"1px solid rgba(250, 250, 250, 0.5);"}
          >
            Comics
          </Button>
        </StyledWrapperBtn>
      </WrapForMainContent>
      <PaginationHeroPage name={name} />
      <WrapperImages dis={"flex"} fldir={"column"}>
        <StyledImage
          src={getPathImg(`${imgName}-1`)}
          alt="hero panther"
          width={237}
          height={343}
        />
        <StyledWrapperImg>
          <StyledImage
            src={getPathImg(`${imgName}-2`)}
            alt="hero black"
            width={237}
            height={343}
          />
          <HeroButton colors={colors}>{name}</HeroButton>
          <span></span>
          <DescriptionWrapper>
            <h2>Characters</h2>
            <p className="description-hero">{description}</p>
          </DescriptionWrapper>
          <StyledGradientBg colorBg={colors.gradientBg} />
        </StyledWrapperImg>
      </WrapperImages>
    </Item>
  );
};
