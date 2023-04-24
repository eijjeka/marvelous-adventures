import styled from "styled-components";

export const StyledButton = styled.button`
  padding: ${({ padding }) => padding || "12px 24px"};
  margin-top: ${({ mt }) => mt || 0};
  margin-right: ${({ mr }) => mr || 0};
  margin-bottom: ${({ mb }) => mb || 0};
  margin-left: ${({ ml }) => ml || 0};
  font-family: ${({ ff }) => ff || "Poppins"};
  font-weight: ${({ fw }) => fw || 500};
  font-size: ${({ fs }) => fs || "14px"};
  line-height: ${({ lh }) => lh || 1.29};
  text-transform: ${({ tt }) => tt || "uppercase"};
  color: ${({ color }) => color || "var(--main-text-color)"};
  background-color: ${({ bgc }) => bgc || "transparent"};
  border: ${({ border }) => border || "1px solid transparent"};
  border-radius: ${({ br }) => br || "1000px"};
  cursor: pointer;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 18px;
    line-height: 1.6;
  }
`;
