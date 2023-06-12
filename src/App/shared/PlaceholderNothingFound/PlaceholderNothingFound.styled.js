import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 267px;
  height: 152px;
  margin: 0 auto;
  @media ${(props) => props.theme.media.tablet} {
    width: 375px;
    height: 221px;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const Text = styled.strong`
  position: absolute;
  left: 65px;
  display: block;
  width: 151px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  @media ${(props) => props.theme.media.tablet} {
    left: 100px;
    width: 192px;
    font-size: 24px;
    line-height: 1.17;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const Svg = styled.svg`
  width: 267px;
  height: 152px;
  @media ${(props) => props.theme.media.tablet} {
    width: 375px;
    height: 221px;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;
