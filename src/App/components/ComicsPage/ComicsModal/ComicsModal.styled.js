import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;
  max-width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
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
export const DescriptionWrapper = styled.div``;
export const Name = styled.h3``;
