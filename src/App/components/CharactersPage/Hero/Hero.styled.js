import styled from "styled-components";
import spider from "App/assets/images/spider-bg.jpg";

export const HeroWrapper = styled.section`
  padding: 220px 0 20px 0;
  background-image: url(${spider});
  background-position: 70%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 278px 0 32px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 278px 0 64px 0;
  }
`;

export const PreTitle = styled.h2`
  margin-bottom: 14px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 27px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 16vw;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #fafafa;

  @media screen and (min-width: 375px) {
    font-size: 60px;
  }

  @media screen and (min-width: 768px) {
    font-size: 128px;
    line-height: 1;
  }

  @media screen and (min-width: 1440px) {
    font-size: 150px;
    line-height: 1;
  }
`;

export const Description = styled.p`
  margin-bottom: 65px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    margin-left: 88px;
    margin-bottom: 188px;
    width: 469px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 145px;
    width: 436px;
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: end;
`;

export const ScrollDownBtn = styled.button`
  padding: 10px 20px;

  font-family: "Neue Montreal";
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #fafafa;
  text-transform: uppercase;
  cursor: pointer;

  background: transparent;
  border: 1px solid rgba(250, 250, 250, 0.5);
  border-radius: 1000px;

  @media screen and (min-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
    line-height: 1.28;
  }
`;
