import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;

  @media ${(props) => props.theme.media.tablet} {
    width: calc((100% - 32px) / 2);
  }

  @media ${(props) => props.theme.media.desktop} {
    width: calc((100% - 48px) / 4);
  }
`;

export const InnerImage = styled.div`
  max-width: 335px;
  height: 445px;
  border-radius: 8px;
  overflow: hidden;

  @media ${(props) => props.theme.media.tablet} {
    max-width: 336px;
  }

  @media ${(props) => props.theme.media.desktop} {
    max-width: 332px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */

  @media ${(props) => props.theme.media.tablet} {
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const InnerDescription = styled.div`
  padding: 16px 0 8px;
  flex-grow: 1;
`;

export const Name = styled.h3`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
  color: var(--main-text-color);

  @media ${(props) => props.theme.media.tablet} {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const Author = styled.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(250, 250, 250, 0.5);

  @media ${(props) => props.theme.media.tablet} {
    font-size: 16px;
    line-height: 1.12;
  }
`;
