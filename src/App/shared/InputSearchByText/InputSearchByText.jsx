import icon from "App/assets/images/sprite.svg";
import { WrapInput, InputText, Svg } from "./InputSearchByText.styled";

export const InputSearchByText = ({ placeholder, ...props }) => {
  return (
    <WrapInput>
      <InputText placeholder={placeholder} />
      <Svg>
        <use href={icon + "#icon-search"} />
      </Svg>
    </WrapInput>
  );
};
