import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperImages = styled.div``;
export const InnerMainImg = styled.div`
  width: 332px;
  height: 445px;

  @media ${(props) => props.theme.media.tablet} {
    width: 332px;
    height: 445px;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 332px;
    height: 445px;
  }
`;
export const MainImg = styled.img`
  width: 100%;
`;
export const Description = styled.div``;
