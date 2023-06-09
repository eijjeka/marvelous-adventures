import styled from "styled-components";

export const Form = styled.form`
  position: relative;
`;

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
  color: var(--main-text-color);

  ::placeholder {
    text-transform: uppercase;
    color: var(--main-text-color);
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

export const SearchListContainer = styled.div`
  position: absolute;
  width: 100%;

  color: #fff;
  background-color: #181818;
  border-radius: 8px;
`;

export const SearchList = styled.ul`
  list-style: none;
  max-height: ${({ count }) => (count > 5 ? "200px" : "")};
  overflow-y: ${({ count }) => (count > 0 ? "scroll" : "")};

  ::-webkit-scrollbar {
    background-color: #000;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #34387f;
    border-radius: 20px;
    border: 1px solid #bebebe;
  }
`;

export const SearchListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  text-align: center;
  transition: color 250ms ease-in-out;

  :hover {
    color: #34387f;
  }
`;
