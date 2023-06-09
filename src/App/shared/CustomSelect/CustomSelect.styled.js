import styled from "styled-components";

export const SelectWrap = styled.div`
  position: relative;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  visibility: visible;
`;

export const Select = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 14px 18px;
  font-size: 14px;
  line-height: 1.29;
  color: var(--main-text-color);
  background-color: ${({ bgc }) => (bgc ? "bgc" : "#171717")};
  border: 2px solid var(--accent-color);
  border-radius: 100px;
  cursor: pointer;

  @media ${(props) => props.theme.media.tablet} {
    /* font-size: 16px;
    line-height: 1.12; */
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
`;

export const OptionList = styled.ul`
  position: absolute;
  z-index: 999;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 27px;
  background-color: #171717;
  border-radius: 16px;
  list-style: none;
  pointer-events: ${({ isOpen }) => (isOpen ? "visible" : "none")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => (isOpen ? "opacity(1)" : "opacity(0)")};
`;
export const OptionItem = styled.li``;
export const Option = styled.button`
  width: 100%;
  padding: 4px 0;
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--main-text-color);
  }

  @media ${(props) => props.theme.media.tablet} {
    /* font-size: 14px;
    line-height: 1.29; */
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;
