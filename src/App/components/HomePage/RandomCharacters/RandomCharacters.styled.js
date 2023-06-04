import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 44px;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;

    font-family: "Poppins";
    font-size: 44px;
    line-height: 1;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
