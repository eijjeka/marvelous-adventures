import styled from "styled-components";

export const Wrapper = styled.ul`
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
    max-height: 100%;
  }
`;
