import { Title, Wrapper } from "./RandomCharacters.styled";
import { useEffect, useState } from "react";
import * as marvelAPI from "App/services/services.js";
import { CharactersList } from "./CharactersList/CharactersList";

export const RandomCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    marvelAPI.getRandomCharacters().then((data) => setCharacters(data));
  }, []);

  return (
    characters.length > 0 && (
      <Wrapper>
        <Title>Random characters</Title>
        <CharactersList data={characters} />
      </Wrapper>
    )
  );
};
