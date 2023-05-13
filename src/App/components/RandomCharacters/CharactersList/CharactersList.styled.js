import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
  }
`;

export const InnerWrapper = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
`;

export const CardImg = styled.img`
  max-width: 100%;
  max-height: 480px;
  margin-bottom: 32px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 495px;
    min-height: 704px;
    margin-bottom: 0;
    margin-right: 32px;
  }
`;
