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
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  gap: 32px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 19px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
`;

// export const ImageWrapper = styled.li`
//   /* width: 263px;

//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     width: 155px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 174px;
//     height: 200px;
//   } */
// `;

export const Image = styled.img`
  width: 100%;
  /* height: 100%; */
  display: block;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 150px;
    margin-bottom: 16px;
  }
`;

export const ItemTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  color: #fafafa;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    line-height: 1.29;
  }
`;

export const TitleWriter = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(250, 250, 250, 0.5);
`;
