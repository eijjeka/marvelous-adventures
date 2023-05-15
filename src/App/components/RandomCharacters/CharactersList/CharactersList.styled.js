import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    /* border: 1px solid red; */
  }
`;

export const InnerWrapper = styled.ul`
  padding: 0;
  list-style: none;
`;

export const CardImgContainer = styled.div`
  max-width: 335px;
  height: 335px;
  margin-bottom: 32px;
  border-radius: 8px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 704px;
    height: 704px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 496px;
    height: 704px;
    margin-bottom: 0;
    margin-right: 32px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 8px;
`;
