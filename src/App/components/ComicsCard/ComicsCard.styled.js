import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.media.tablet} {
  }

  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const InnerImage = styled.div`
  max-width: 335px;
  min-height: 445px;
  border-radius: 8px;

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
  object-fit: cover;

  @media ${(props) => props.theme.media.tablet} {
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const InnerDescription = styled.div`
  flex-grow: 1;
  @media ${(props) => props.theme.media.tablet} {
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const Name = styled.h3`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #fafafa;

  @media ${(props) => props.theme.media.tablet} {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 1;
  }
  @media ${(props) => props.theme.media.desktop} {
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
  @media ${(props) => props.theme.media.desktop} {
  }
`;
