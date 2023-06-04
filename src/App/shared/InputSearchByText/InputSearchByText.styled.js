import styled from "styled-components";

export const WrapInput = styled.span`
  position: relative;
`;

export const InputText = styled.input`
  width: 100%;
  height: 46px;
  padding: 14px 46px 14px 24px;
  color: var(--main-text-color);
  background-color: ${({ bgc }) => bgc || "var(--accent-color)"};
  border: 2px solid #34387f;
  border-radius: 100px;
  &::placeholder {
    color: var(--main-text-color);
  }
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
`;
