import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "App/shared/Container/Container";

export const InnerWrapper = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 68px;
    padding-bottom: 68px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const LinkItem = styled(Link)`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #fafafa;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
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
