import { Wrapper, Text, Svg } from "./PlaceholderNothingFound.styled";
import icon from "App/assets/images/sprite.svg";

export const PlaceholderNothingFound = (second) => {
  return (
    <Wrapper>
      <Text>Try looking for something else..</Text>
      <Svg>
        <use href={icon + "#icon-svg-for-placeholder"} />
      </Svg>
    </Wrapper>
  );
};
