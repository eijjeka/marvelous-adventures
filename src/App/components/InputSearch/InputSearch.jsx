import { Container, Input, Button, Svg } from "./InputSearch.styled";
import icon from "App/assets/images/sprite.svg";

export const InputSearch = ({ placeholder }) => {
  return (
    <Container>
      <Button>
        <Svg>
          <use href={icon + "#icon-search"} />
        </Svg>
      </Button>
      <Input placeholder={placeholder} />
    </Container>
  );
};
