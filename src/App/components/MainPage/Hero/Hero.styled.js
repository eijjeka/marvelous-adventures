import styled from "styled-components";
import { Section } from "../../../shared/Section/Section";
import { Button } from "App/shared/Button/Button";

export const HeroSection = styled(Section)`
  @media ${(props) => props.theme.media.phone} {
    padding-top: 92px;
    padding-bottom: 80px;
  }
  @media ${(props) => props.theme.media.tablet} {
    padding-top: 146px;
  }
  @media ${(props) => props.theme.media.desktop} {
    padding-top: 210px;
    padding-bottom: 185px;
  }

  & > div {
    @media (max-width: 767px) {
      min-height: 1200.34px;
    }

    @media ${(props) => props.theme.media.desktop} {
      display: flex;
    }
    @media ${(props) => props.theme.media.desktop} {
    }
  }
  p {
    margin-bottom: 20px;
    color: var(--main-text-color);
    font-size: 14px;
    line-height: 1.29;
    @media ${(props) => props.theme.media.tablet} {
      margin-bottom: 32px;
      font-size: 16px;
      line-height: 1.12;
    }
  }

  .hero-text {
    @media ${(props) => props.theme.media.tablet} {
      width: 473px;
    }
  }
  span {
    display: inline-block;
    margin-top: 14px;
    margin-bottom: 16px;
    width: 100%;
    height: 1px;
    background-color: rgba(250, 250, 250, 0.15);
  }

  h2 {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
  }

  .description-hero {
    width: 125px;
    min-height: 84px;
    margin-bottom: 0;
    font-family: "Helvetica Neue";
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: var(--secondary-text-color);

    @media ${(props) => props.theme.media.tablet} {
      width: 195px;
    }
    @media ${(props) => props.theme.media.desktop} {
    }
  }
`;

export const WrapForMainContent = styled.div`
  @media ${(props) => props.theme.media.desktop} {
  }
`;
export const SubTitle = styled.p`
  margin-bottom: 14px;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.29;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 18px;
    line-height: 1.6;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 16px;
  color: var(--main-text-color);
  font-weight: 500;
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.02em;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 80px;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 538px;
  }
`;

export const StyledWrapperBtn = styled.div`
  margin-bottom: 40px;
  @media ${(props) => props.theme.media.tablet} {
    margin-bottom: 32px;
  }
`;
export const WrapperImages = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 18px;

  @media ${(props) => props.theme.media.tablet} {
    flex-direction: row;
    align-items: flex-end;
    gap: 32px;
    padding-left: 0;
  }

  @media ${(props) => props.theme.media.desktop} {
    position: absolute;
    right: 0;
    top: -146px;
  }
`;

export const StyledImage = styled.img`
  width: 237px;
  height: 343px;
  border-radius: 4px;

  @media ${(props) => props.theme.media.tablet} {
    width: 336px;
    height: 540px;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 352px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 55px;

  @media ${(props) => props.theme.media.tablet} {
  }
  @media ${(props) => props.theme.media.desktop} {
    gap: 68px;
  }
`;

export const StyledWrapperImg = styled.div`
  position: relative;
  z-index: 2;
  align-self: flex-end;
  /* width: 237px; */
  margin-top: 20px;
  @media ${(props) => props.theme.media.tablet} {
    /* width: 336px; */
    margin-top: 0;
  }
  @media ${(props) => props.theme.media.desktop} {
    padding-bottom: 96px;
    /* width: 352px; */
  }
`;

export const StyledHeroButton = styled.button`
  position: absolute;
  top: 239px;
  left: 14px;
  display: inline-block;
  width: 90px;
  height: 90px;
  border: transparent;
  border-radius: 50%;
  font-family: inherit;
  text-transform: uppercase;
  color: inherit;
  cursor: pointer;
  transition: transform 300ms linear, box-shadow 300ms linear;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 144px;
    height: 144px;
    top: 380px;
  }
  background-image: ${(colors) => colors.gradientBtn};
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px ${(colors) => colors.main};
  }
`;

export const StyledGradientBg = styled.div`
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: 40px;
  width: 260px;
  height: 234px;
  filter: blur(47px);
  border-radius: 200000px;
  @media ${(props) => props.theme.media.tablet} {
    width: 332px;
    height: 300px;
    bottom: 0;
  }
  background-image: ${({ colorBg }) => colorBg};
`;

export const ColorButton = styled(Button)`
  background-color: ${({ colorBg }) => colorBg};
  transition-property: transform, color, background-color, border, box-shadow;
  transition-duration: 300ms;
  transition-timing-function: linear;
  &:hover,
  &:focus {
    color: ${({ colorBg }) => colorBg};
    background-color: transparent;
    border: 1px solid ${({ colorBg }) => colorBg};
    box-shadow: 0 0 10px inset;
    transform: scale(1.03);
  }
`;
