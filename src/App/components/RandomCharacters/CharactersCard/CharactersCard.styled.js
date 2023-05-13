import styled from "styled-components";

export const Wrapper = styled.li`
  margin-bottom: 32px;
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);
`;

export const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 16px;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;

  color: ${({ active, id }) => (active.id === id ? "#4B50AD" : "#fafafa")};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const CardText = styled.p`
  margin-bottom: 32px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;

  color: ${({ active, id }) =>
    active.id === id ? "#4B50AD" : "rgba(250, 250, 250, 0.5)"};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;