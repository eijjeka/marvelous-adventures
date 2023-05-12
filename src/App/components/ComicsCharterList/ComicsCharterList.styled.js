import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #fafafa;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.02em;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  list-style: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 19px;
  }

  @media screen and (min-width: 1440px) {
    gap: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const ItemTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  color: #fafafa;
  letter-spacing: -0.02em;
`;
