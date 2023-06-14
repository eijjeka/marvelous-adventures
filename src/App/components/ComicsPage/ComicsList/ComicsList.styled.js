import styled from "styled-components";

export const ComicsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 16px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 60px;
  line-height: 1;
  color: var(--main-text-color);

  @media ${(props) => props.theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 150px;
  }
  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 16px;
    row-gap: 56px;
    column-gap: 16px;
  }
`;
