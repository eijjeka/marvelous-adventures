import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: normal;
  }
`;

export const CloseBtn = styled.button`
  width: 20px;
  height: 20px;

  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CardImg = styled.img`
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: 480px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 16px;
  }
`;

export const Meta = styled.div`
  padding: 32px 16px;
  background: #181818;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
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
  font-weight: 400;
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
