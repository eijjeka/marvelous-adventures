import styled, { css } from "styled-components";
import { Section } from "./../../../shared/Section/Section";
import { Button } from "App/shared/Button/Button";

export const HeroSection = styled(Section)`
  .subtitle {
    margin-bottom: 14px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1.29;
    @media ${(props) => props.theme.media.tablet} {
      font-size: 18px;
      line-height: 1.6;
    }
  }

  h1 {
    margin-bottom: 16px;
    color: var(--main-text-color);
    font-weight: 500;
    font-size: 44px;
    line-height: 1;
    letter-spacing: -0.02em;
    @media ${(props) => props.theme.media.tablet} {
      font-size: 80px;
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
    margin-bottom: 0;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: var(--secondary-text-color);
  }
`;

export const StyledWrapperBtn = styled.div`
  margin-bottom: 40px;
`;

export const StyledImage = styled.img`
  width: 237px;
  height: 343px;
  @media ${(props) => props.theme.media.tablet} {
    width: 336px;
    height: 540px;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 352px;
  }
`;

export const StyledWrapperImg = styled.div`
  position: relative;
  z-index: 2;
  align-self: flex-end;
  width: 237px;
  margin-top: 20px;
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
  }

  ${(props) =>
    props.panther &&
    css`
      background-image: ${(props) => props.theme.panther.buttonGradient};
      &:hover,
      &:focus {
        box-shadow: 0 0 15px 5px ${(props) => props.theme.panther.color};
      }
    `}
  ${(props) =>
    props.spider &&
    css`
      background-image: ${(props) => props.theme.spider.buttonGradient};
      &:hover,
      &:focus {
        box-shadow: 0 0 15px 5px ${(props) => props.theme.spider.color};
      }
    `}
  ${(props) =>
    props.hulk &&
    css`
      background-image: ${(props) => props.theme.hulk.buttonGradient};
      &:hover,
      &:focus {
        box-shadow: 0 0 15px 5px ${(props) => props.theme.hulk.color};
      }
    `}
`;

export const StyledGradientBg = styled.div`
  position: absolute;
  right: 0;
  bottom: 40px;
  width: 260px;
  height: 234px;
  filter: blur(47px);
  border-radius: 200000px;
  @media ${(props) => props.theme.media.tablet} {
    width: 144px;
    height: 144px;
  }
  ${(props) =>
    props.panther &&
    css`
      background-image: ${(props) => props.theme.panther.bgGradient};
    `}
  ${(props) =>
    props.spider &&
    css`
      background-image: ${(props) => props.theme.spider.bgGradient};
    `}
  ${(props) =>
    props.hulk &&
    css`
      background-image: ${(props) => props.theme.hulk.bgGradient};
    `}
`;

export const ColorButton = styled(Button)`
  ${(props) =>
    props.panther &&
    css`
      background-color: ${(props) => props.theme.panther.color};
    `}
  ${(props) =>
    props.spider &&
    css`
      background-color: ${(props) => props.theme.spider.color};
    `}
  ${(props) =>
    props.hulk &&
    css`
      background-color: ${(props) => props.theme.hulk.color};
    `}
`;
