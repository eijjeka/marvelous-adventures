import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const Title = styled.h2`
  margin-bottom: 44px;

  font-weight: 500;
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;

    font-size: 44px;
    line-height: 1;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Item = styled.li`
  transition: transform 250ms ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.02);
  }
`;

export const CardImgContainer = styled.div`
  max-width: 335px;
  height: 445px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 8px;
`;

export const CardTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #fafafa;
`;
