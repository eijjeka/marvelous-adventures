import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;
  max-width: 335px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.media.tablet} {
    max-width: 600px;
    padding: 64px 32px;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 332px;
    height: 445px;
  }
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
  width: 295px;
  height: 445px;
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;

  @media ${(props) => props.theme.media.tablet} {
    width: 332px;
    height: 445px;
    align-self: flex-start;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 332px;
    height: 445px;
  }
`;
export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 32px 16px;
  border-radius: 8px;
  background-color: var(--secondary-bg-color);
`;
export const Description = styled.p``;

export const Name = styled.h3`
  margin-bottom: 4px;
`;

export const WrapForAuthorAndModified = styled.p`
  display: flex;
  gap: 7px;
  margin-bottom: 16px;
  color: var(--secondary-text-color);
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.28;

  @media ${(props) => props.theme.media.tablet} {
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 332px;
    height: 445px;
  }
`;

export const Author = styled.span`
  display: flex;
  gap: 7px;
  &:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 100%;

    background-color: var(--secondary-text-color);
  }
`;
export const ModifiedDate = styled.span``;

export const DetailsList = styled.ul`
  display: flex;
  gap: 24px;
`;
export const DetailsItem = styled.li``;
export const DetailsTitle = styled.h4`
  margin-bottom: 4px;
  color: var(--secondary-text-color);
  font-size: 10px;
  line-height: 1.2;
  text-transform: uppercase;
`;
export const DetailsText = styled.p`
  font-size: 14px;
  line-height: 1.29;
`;

// export const Inner = styled.div`
//   width: 525px;
//   height: 536px;
//   border-radius: 80px;
//   background-position: 2px -15px;
//   background-color: #faf3e7;
//   background-size: 47px 45px;
//   background-image: radial-gradient(
//     circle at center,
//     rgba(161, 196, 135, 0.69) 0px,
//     rgba(161, 196, 135, 0.69) 2.5px,
//     #faf3e7 2.5px,
//     #faf3e7 100%
//   );
// `;
// export const TinyInner = styled.div`
//   width: 47px;
//   height: 45px;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='47' height='45'%3E%3Ccircle cx='23.5' cy='22.5' r='2.5' fill='rgba(161, 196, 135, 0.69)' /%3E%3C/svg%3E");
//   background-size: 47px 45px;
//   background-position: center;
// `;

// export const Inner = styled.div`
//   width: 525px;
//   height: 536px;
//   border-radius: 80px;
//   background-position: 2px -15px;
//   background-color: #faf3e7;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='47' height='45'%3E%3Ccircle cx='23.5' cy='22.5' r='2.5' fill='rgba(161, 196, 135, 0.69)' /%3E%3C/svg%3E");
//   background-size: 47px 45px;
// `;
