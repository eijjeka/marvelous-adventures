import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const StyledDayPicker = styled(DayPicker)`
  .rdp-head_cell {
    padding: 1px;
    color: var(--accent-color);
  }

  .rdp-caption {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .rdp-nav {
    display: flex;
    justify-content: space-between;
  }

  .rdp-nav_button {
    padding: 0 5px;
    color: var(--secondary-text-color);
    background-color: transparent;
    border: none;
    transition: transform 300ms ease, color 300ms ease;
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--main-text-color);
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:focus {
      color: grey;
      transform: scale(0.8);
      cursor: not-allowed;
    }
  }

  .rdp-nav_button_next {
    &:hover,
    &:focus {
      transform: translateX(3px) scale(1.2);
    }
  }

  .rdp-nav_button_previous {
    &:hover,
    &:focus {
      transform: translateX(-3px) scale(1.2);
    }
  }

  .rdp-cell {
    text-align: center;
  }

  .rdp-day {
    color: var(--secondary-text-color);
    background-color: transparent;
    border: none;
    transition: transform 300ms ease, color 300ms ease;
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--main-text-color);
      transform: scale(1.5);
    }
  }

  .rdp-day_today {
    width: 100%;
    color: var(--main-text-color);
    border: 2px solid var(--accent-color);
    border-radius: 50%;
    transform: scale(1.3);
  }

  .rdp-day_disabled,
  .rdp-day_disabled:hover {
    color: gray;
    transform: scale(0.7);
  }
`;

export const SelectWrap = styled.div`
  position: relative;
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

  @media ${(props) => props.theme.media.tablet} {
    right: 0;
  }
  @media ${(props) => props.theme.media.desktop} {
  }
`;
