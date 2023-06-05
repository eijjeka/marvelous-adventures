import icon from "App/assets/images/sprite.svg";
import { WrapInput, InputText, Svg } from "./InputSearchByText.styled";
import { useEffect, useState } from "react";

export const InputSearchByText = ({
  placeholder,
  getStateByInput,
  bgcolor,
}) => {
  const [valueText, setValueText] = useState("");
  const handleChange = (event) => {
    setValueText(event.target.value.trim());
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      getStateByInput(valueText);
    }, 300);

    return () => clearTimeout(getData);
  }, [valueText, getStateByInput]);

  return (
    <WrapInput>
      <InputText
        bgc={bgcolor}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <Svg>
        <use href={icon + "#icon-search"} />
      </Svg>
    </WrapInput>
  );
};
