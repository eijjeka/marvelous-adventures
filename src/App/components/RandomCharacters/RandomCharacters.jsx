import { Title } from "./RandomCharacters.styled";
import { useEffect, useState } from "react";
import * as marvelAPI from "App/services/services.js";
import { CharactersList } from "./CharactersList/CharactersList";
import { Section } from "App/shared/Section/Section";
import { Container } from "App/shared/Container/Container";

export const RandomCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    try {
      marvelAPI.getRandomCharacters().then((data) => {
        console.log("data: ", data);
        const items = data.filter(
          (el) =>
            el.thumbnail.path.indexOf("image_not_available") === -1 &&
            el.description !== ""
        );

        console.log("items: ", items);
        const arr = items.slice(0, 5);
        setCharacters(arr);
      });
    } catch (error) {
      console.log("error: ", error);
    }
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
