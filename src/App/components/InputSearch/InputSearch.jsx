import { Container, Input, Button } from "./InputSearch.styled";
import icon from "App/assets/images/sprite.svg";
import { IconSvg } from "App/shared/IconSvg";
import { getRandomCharacters } from "App/services/services";
import { useEffect, useState } from "react";

export const InputSearch = ({ placeholder }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getRandomCharacters().then((randomCharacters) => {
      console.log(randomCharacters);
      // setCharacters(randomCharacters);
    });
  }, []);

  return (
    <Container>
      <Button>
        <IconSvg path={icon + "#icon-search"} wh={16} hg={16} />
      </Button>
      <Input placeholder={placeholder} />
    </Container>
  );
};
