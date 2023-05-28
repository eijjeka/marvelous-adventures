import { useState, useEffect, useRef } from "react";
import icon from "App/assets/images/sprite.svg";
import {
  SelectWrap,
  Select,
  OptionList,
  OptionItem,
  Option,
  Svg,
} from "./CustomSelect.styled";

export const CustomSelect = ({ state, options }) => {
  const [currentOption, setCurrentOption] = useState(options[0]);
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);
  const selectRef = useRef();
  const optionListRef = useRef();

  const appRoot = document.getElementById("root");

  const handleClickOutside = (event) => {
    if (optionListRef.current !== event.target) {
      setOptionsIsOpen(!optionsIsOpen);
    }
  };

  const handleClickOnSelect = (event) => {
    setOptionsIsOpen(!optionsIsOpen);
  };

  const handleClickOnOption = (event) => {
    const selectedItem = event.target.textContent;
    setCurrentOption(selectedItem);
    setOptionsIsOpen(!optionsIsOpen);
  };

  useEffect(() => {
    if (optionsIsOpen) {
      appRoot.addEventListener("click", handleClickOutside);
    }
    return () => {
      appRoot.removeEventListener("click", handleClickOutside);
    };
  }, [optionsIsOpen]);

  return (
    <SelectWrap isOpen={optionsIsOpen}>
      <Select ref={selectRef} onClick={handleClickOnSelect} type="button">
        {currentOption}
        <Svg>
          <use href={icon + "#icon-arrow-select"} />
        </Svg>
      </Select>
      <OptionList ref={optionListRef} isOpen={optionsIsOpen}>
        {options.map((opt) => {
          return (
            <OptionItem key={opt}>
              <Option onClick={handleClickOnOption} type="button">
                {opt}
              </Option>
            </OptionItem>
          );
        })}
      </OptionList>
    </SelectWrap>
  );
};
