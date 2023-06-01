import styled from "styled-components";

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 20px;

  @media ${(props) => props.theme.media.phone} {
  }
  @media ${(props) => props.theme.media.tablet} {
    flex-direction: row;
  }
  @media ${(props) => props.theme.media.desktop} {
    justify-content: center;
    align-items: center;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => (width ? width : "100%")};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 4px;

  color: rgba(250, 250, 250, 0.3);

  @media ${(props) => props.theme.media.tablet} {
    gap: 8px;
    font-size: 14px;
    line-height: 1.29;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const LabelSearch = styled(Label)`
  @media ${(props) => props.theme.media.desktop} {
    width: 268px;
  }
`;

export const LabelStartWith = styled(Label)`
  @media ${(props) => props.theme.media.desktop} {
    width: 190px;
    order: 2;
  }
`;

export const LabelOrderBy = styled(Label)`
  @media ${(props) => props.theme.media.desktop} {
    width: 185px;
    order: 1;
  }
`;

export const LabelDate = styled(Label)`
  @media ${(props) => props.theme.media.desktop} {
    width: 170px;
    order: 3;
  }
`;
