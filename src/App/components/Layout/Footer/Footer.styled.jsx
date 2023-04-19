import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.footer``;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  padding: 40px 20px 40px 20px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;

  list-style: none;
`;

export const ListItem = styled.li``;

export const LinkItem = styled(Link)`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #fafafa;
  text-decoration: none;
`;

export const PolicyWrapper = styled.p`
  padding-top: 16px;
  padding-bottom: 16px;
  margin: 0;

  font-family: "Poppins";
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  background: #34387f;
  color: rgba(250, 250, 250, 0.4);
  text-align: center;
`;
