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
  const selectRef = useRef(null);
  const optionListRef = useRef(null);

  const appRoot = document.getElementById("root");

  const handleClickOutside = (event) => {
    console.log(optionListRef.current);
    console.log(event.target);
    if (optionListRef.current !== event.target) {
      setOptionsIsOpen(!optionsIsOpen);
      // Добавьте здесь логику закрытия OptionList
    }
  };

  // Добавляем обработчик события клика на корневой элемент

  const handleClickOnSelect = (event) => {
    console.log("handleClickOnSelect");
    setOptionsIsOpen(!optionsIsOpen);
  };

  const handleClickOnOption = (event) => {
    const selectedItem = event.target.textContent;
    console.log("handleClickOnOption");
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

  // const handleKeyDown = (event) => {
  //   if (event.key === "ArrowUp" || event.key === "ArrowDown") {
  //     event.preventDefault();
  //     setOptionsIsOpen(true);
  //     selectRef.current.focus();
  //     console.log("selectRef.current.focus(): ", selectRef.current);
  //   }
  // };

  // const handleKeyUp = (event) => {
  //   if (event.key === "ArrowUp") {
  //     event.preventDefault();
  //     const currentIndex = options.indexOf(currentOption);
  //     const newIndex = (currentIndex - 1 + options.length) % options.length;
  //     console.log("newIndex: ", newIndex);
  //     setCurrentOption(options[newIndex]);
  //   } else if (event.key === "ArrowDown") {
  //     event.preventDefault();
  //     const currentIndex = options.indexOf(currentOption);
  //     const newIndex = (currentIndex + 1) % options.length;
  //     setCurrentOption(options[newIndex]);
  //   }
  // };

  // useEffect(() => {
  //   if (optionsIsOpen) {
  //     document.addEventListener("keydown", handleKeyDown);
  //     document.addEventListener("keyup", handleKeyUp);
  //   } else {
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("keyup", handleKeyUp);
  //   }

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, [optionsIsOpen, currentOption]);

  return (
    <SelectWrap isOpen={optionsIsOpen}>
      <Select
        ref={selectRef}
        // onKeyDown={handleKeyDown}
        // onKeyUp={handleKeyUp}
        onClick={handleClickOnSelect}
        type="button"
      >
        {currentOption}
        <Svg>
          <use href={icon + "#icon-arrow-select"} />
        </Svg>
      </Select>
      <OptionList ref={optionListRef} isOpen={optionsIsOpen}>
        {options.map((opt) => {
          return (
            <OptionItem key={opt}>
              <Option
                // onKeyDown={handleKeyDown}
                // onKeyUp={handleKeyUp}
                onClick={handleClickOnOption}
                type="button"
              >
                {opt}
              </Option>
            </OptionItem>
          );
        })}
      </OptionList>
    </SelectWrap>
  );
};
