import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
