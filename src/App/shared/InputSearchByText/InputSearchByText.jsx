import icon from "App/assets/images/sprite.svg";
import { WrapInput, InputText, Svg } from "./InputSearchByText.styled";
import { useEffect, useState } from "react";

export const InputSearchByText = ({ placeholder, func }) => {
  const [valueText, setValueText] = useState("");
  console.log(func);
  useEffect(() => {
    func(valueText);
    // eslint-disable-next-line
  }, [valueText, func]);

  return (
    <WrapInput>
      <InputText onChange={setValueText} placeholder={placeholder} />
      <Svg>
        <use href={icon + "#icon-search"} />
      </Svg>
    </WrapInput>
  );
};
