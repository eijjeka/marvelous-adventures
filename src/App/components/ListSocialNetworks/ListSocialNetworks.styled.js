import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-top: 14px;
  list-style: none;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 14px;
  }
`;

export const LinkItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  text-decoration: none;
  border: 1px solid rgba(250, 250, 250, 0.15);
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
