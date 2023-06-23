import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 40px 20px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 20px;
  height: 20px;

  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 5px;
    right: 13px;
    width: 28px;
    height: 28px;
  }

  @media screen and (min-width: 1440px) {
    top: 0px;
    right: 12px;
  }
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: normal;
  }
`;

export const CardImgContainer = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 536px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 442px;
    margin-right: 32px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 8px;
`;

export const Meta = styled.div`
  padding: 32px 16px;
  background: #181818;
  border-radius: 8px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 536px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1440px) {
    width: 588px;
  }
`;

export const Title = styled.h2`
  padding: 0;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
`;

export const Date = styled.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;
  color: rgba(250, 250, 250, 0.5);

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.28;
  color: var(--main-text-color);
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 64px;
  }
`;
