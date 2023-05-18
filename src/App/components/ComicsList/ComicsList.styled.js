import styled from "styled-components";

export const ComicsList = styled.h1`
  margin-bottom: 16px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 60px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #fafafa;

  @media ${(props) => props.theme.media.tablet} {
    font-size: 150px;
  }
  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 16px;
  }
`;
