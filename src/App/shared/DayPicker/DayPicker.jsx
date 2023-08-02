import { useState, useRef, useEffect } from "react";
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

export const CustomDayPicker = ({ setDate }) => {
  const dateNow = moment().format("DD/MM/YYYY");

  const [selectedDay, setSelectedDay] = useState(dateNow);
  const [IsOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState();
  const [currentYear, setCurrentYear] = useState();
  const selectRef = useRef();
  const optionListRef = useRef();

  const handleClickOnButton = (e) => {
    setIsOpen(!IsOpen);
  };

  const handleDaySelect = (date) => {
    if (date) {
      setDate(moment(date).format("YYYY"));
      setSelectedDay(moment(date).format("DD/MM/YYYY"));
      setCurrentMonth();
      setCurrentYear();
    }
    setIsOpen(!IsOpen);
  };

  useEffect(() => {
    if (IsOpen) {
      const monthAndYearContent = document.querySelector(
        ".rdp-caption_dropdowns .rdp-vhidden .rdp-caption_label"
      );
      monthAndYearContent.innerHTML =
        monthAndYearContent.textContent.split(" ")[0];
      console.log(currentMonth);
      console.log(currentYear);
    }
  }, [IsOpen, selectedDay, currentMonth, currentYear]);

  return (
    <SelectWrap>
      <Select ref={selectRef} onClick={handleClickOnButton} type="button">
        {selectedDay}
        <Svg>
          <use href={icon + "#icon-arrow-select"} />
        </Svg>
      </Select>
      {IsOpen && (
        <WrapDayPicker ref={optionListRef}>
          <StyledDayPicker
            selected={selectedDay}
            onSelect={handleDaySelect}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            year={currentYear}
            onYearChange={setCurrentYear}
            mode="single"
            captionLayout="dropdown-buttons"
            fromYear={1970}
            toDate={new Date(moment().format("YYYY, MM, DD"))}
          />
        </WrapDayPicker>
      )}
    </SelectWrap>
  );
};
