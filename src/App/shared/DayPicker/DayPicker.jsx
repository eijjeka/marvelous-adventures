import { useState, useRef } from "react";
// import { DayPicker } from "react-day-picker";
import icon from "App/assets/images/sprite.svg";
import moment from "moment";
import {
  SelectWrap,
  Select,
  WrapDayPicker,
  StyledDayPicker,
  Svg,
} from "./DayPicker.styled";

export const CustomDayPicker = ({ options }) => {
  const date = moment().format("DD/MM/YYYY");

  const [selectedDay, setSelectedDay] = useState(date);
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);

  const selectRef = useRef();
  const optionListRef = useRef();

  const handleClickOnButton = (e) => {
    console.log("click button");
    setOptionsIsOpen(!optionsIsOpen);
  };

  const handleDaySelect = (date) => {
    console.log("click DATE");
    if (date) {
      setSelectedDay(moment(date).format("DD/MM/YYYY"));
    }
    setOptionsIsOpen(!optionsIsOpen);
  };

  return (
    <SelectWrap>
      <Select ref={selectRef} onClick={handleClickOnButton} type="button">
        {selectedDay}
        <Svg>
          <use href={icon + "#icon-arrow-select"} />
        </Svg>
      </Select>
      {optionsIsOpen && (
        <WrapDayPicker ref={optionListRef}>
          <StyledDayPicker
            selected={selectedDay}
            onSelect={handleDaySelect}
            mode="single"
            fromYear={2015}
            toYear={2025}
          />
        </WrapDayPicker>
      )}
    </SelectWrap>
  );
};
