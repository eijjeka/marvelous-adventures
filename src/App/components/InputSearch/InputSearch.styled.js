import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 18px;

  border: 1px solid rgba(250, 250, 250, 0.3);
  border-radius: 1000px;

  @media screen and (min-width: 768px) {
    padding: 12px 24px;
  }
`;

export const Input = styled.input`
  width: 56px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;

  background-color: transparent;
  outline: none;
  border: none;
  color: #fafafa;

  &::placeholder {
    text-transform: uppercase;
    color: #fafafa;
  }
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;

  background-color: transparent;
  outline: none;
  border: none;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
