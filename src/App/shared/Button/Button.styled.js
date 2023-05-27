import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: ${({ display }) => display || "inline-block"};
  width: ${({ width }) => width || "auto"};
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
  text-decoration: none;
  color: ${({ color }) => color || "var(--main-text-color)"};
  background-color: ${({ bgc }) => bgc || "transparent"};
  border: ${({ border }) => border || "1px solid transparent"};
  border-radius: ${({ br }) => br || "1000px"};
  transition-property: transform, box-shadow, color;
  transition-duration: 300ms, 500ms, 500ms;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    color: black;
    box-shadow: 0 0 100px white inset;
    transform: scale(1.06);
  }
`;
