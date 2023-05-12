import { Title } from "./RandomCharacters.styled";
import { useEffect, useState } from "react";
import * as marvelAPI from "App/services/services.js";
import { CharactersList } from "./CharactersList/CharactersList";
import { Section } from "App/shared/Section/Section";
import { Container } from "App/shared/Container/Container";

export const RandomCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    marvelAPI.getRandomCharacters().then((data) => {
      const items = data.filter(
        (el) =>
          el.thumbnail.path.indexOf("image_not_available") === -1 &&
          el.description !== ""
      );
      const arr = items.slice(0, 5);
      setCharacters(arr);
    });
  }, []);

  return (
    <Section>
      <Container>
        <Title>Random characters</Title>
        {characters.length > 0 && <CharactersList data={characters} />}
      </Container>
    </Section>
  );
};
