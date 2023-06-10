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

export const CustomDayPicker = ({ setDate }) => {
  const dateNow = moment().format("DD/MM/YYYY");

  const [selectedDay, setSelectedDay] = useState(dateNow);
  const [IsOpen, setIsOpen] = useState(false);
  const selectRef = useRef();
  const optionListRef = useRef();

  const handleClickOnButton = (e) => {
    setIsOpen(!IsOpen);
  };

  const handleDaySelect = (date) => {
    if (date) {
      setDate(moment(date).format("YYYY-MM-DD"));
      setSelectedDay(moment(date).format("DD/MM/YYYY"));
    }
    setIsOpen(!IsOpen);
  };
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
            mode="single"
            toDate={new Date(moment().format("YYYY, MM, DD"))}
          />
        </WrapDayPicker>
      )}
    </SelectWrap>
  );
};
