import styled from "styled-components";
import { Section } from "./../../shared/Section/Section";
import getPathImg from "./../../services/getPathImg";

export const ComicsHeroSection = styled(Section)`
  padding-top: 220px;
  padding-bottom: 20px;
  background-image: url(${getPathImg("comics-bg-mob")});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${(props) => props.theme.media.tablet} {
    padding-top: 278px;
    padding-bottom: 32px;
    background-image: url(${getPathImg("comics-bg-tab")});
  }

  @media ${(props) => props.theme.media.desktop} {
    max-width: 1440px;
    margin: 0 auto;
    padding-bottom: 64px;
    background-image: url(${getPathImg("comics-bg")});
    background-position: right;
    background-size: auto;
  }
`;

export const SubTitle = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  line-height: 1.29;

  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.7);

  @media ${(props) => props.theme.media.tablet} {
    font-size: 18px;
    line-height: 1.6;
  }

  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 60px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #fafafa;

  @media ${(props) => props.theme.media.tablet} {
    font-size: 150px;
  }
  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 16px;
  }
`;

export const Description = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;

  color: #fafafa;

  @media ${(props) => props.theme.media.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
  @media ${(props) => props.theme.media.desktop} {
    margin-left: 88px;
    margin-bottom: 145px;
    width: 469px;
  }
`;
