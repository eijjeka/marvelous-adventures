import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-top: 14px;
  list-style: none;
`;

export const Item = styled.li`
  padding: ${({ pg }) => pg || 0};

  border: 1px solid rgba(250, 250, 250, 0.15);
  border-radius: 6px;

  :not(:last-child) {
    margin-right: 14px;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
`;
