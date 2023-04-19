import { Container, Input, Button } from "./InputSearch.styled";
import icon from "App/assets/images/sprite.svg";
import { IconSvg } from "App/shared/IconSvg";

export const InputSearch = ({ placeholder }) => {
  return (
    <Container>
      <Button>
        <IconSvg path={icon + "#icon-search"} wh={16} hg={16} />
      </Button>
      <Input placeholder={placeholder} />
    </Container>
  );
};
