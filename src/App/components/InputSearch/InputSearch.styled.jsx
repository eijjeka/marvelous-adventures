import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 18px;

  border: 1px solid rgba(250, 250, 250, 0.3);
  border-radius: 1000px;
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

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
`;
