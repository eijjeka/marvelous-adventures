import { DayPicker } from "react-day-picker";
// import "node_modules/react-day-picker/src/style.css";
// import "react-day-picker/lib/style.css";
import styled from "styled-components";

export const StyledDayPicker = styled(DayPicker)`
  /* Ваші налаштування стилів */
  .DayPicker-Day {
    color: red;
  }

  .DayPicker-Day--selected {
    /* Стилі для обраного дня */
    color: red;
  }

  .DayPicker-NavButton {
    /* Стилі для кнопок навігації */
    background-color: red;
  }

  /* Додайте інші налаштування стилів за потреби */
`;

export const SelectWrap = styled.div`
  position: relative;
  /* visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  visibility: visible; */
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

export const WrapDayPicker = styled.div`
  position: absolute;
  z-index: 999;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  background-color: #171717;
  border-radius: 16px;
  list-style: none;
  /* pointer-events: ${({ isOpen }) => (isOpen ? "visible" : "none")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => (isOpen ? "opacity(1)" : "opacity(0)")}; */

  @media ${(props) => props.theme.media.tablet} {
    /* font-size: 16px;
    line-height: 1.12; */
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;
