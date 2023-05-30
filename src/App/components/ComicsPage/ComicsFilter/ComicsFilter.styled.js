import styled from "styled-components";

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${(props) => props.theme.media.phone} {
  }
  @media ${(props) => props.theme.media.tablet} {
    flex-direction: row;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => (width ? width : "100%")};
  font-size: 12px;
  line-height: 1.17;

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
  @media ${(props) => props.theme.media.tablet} {
    width: 197px;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const LabelFormatSelect = styled(Label)`
  @media ${(props) => props.theme.media.tablet} {
    width: 169px;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const LabelOderSelect = styled(Label)`
  @media ${(props) => props.theme.media.tablet} {
    width: 149px;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;
export const LabelData = styled(Label)`
  width: 156px;
  @media ${(props) => props.theme.media.tablet} {
    width: 149px;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const WrapperSelect = styled.div`
  display: flex;

  gap: 8px;
`;
