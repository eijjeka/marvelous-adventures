import styled from "styled-components";

export const Section = styled.section`
  margin-top: 64px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  list-style: none;

  @media ${(props) => props.theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media ${(props) => props.theme.media.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
`;

export const Item = styled.li`
  transition: transform 250ms ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.02);
  }
`;

export const CardImg = styled.img`
  display: block;
  width: 332px;
  height: 445px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;

  color: #fafafa;
`;

export const NotFoundImg = styled.img`
  margin: 0 auto;
`;
