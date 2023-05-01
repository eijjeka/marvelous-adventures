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
      setCharacters(items.slice(0, 5));
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

// useEffect(() => {
//   for (let i = 0; i < items.length; i++) {
//     const { description, thumbnail } = items[i];

//     if (characters.length === 5) {
//       console.log("yes");
//       break;
//     } else if (
//       thumbnail.path.indexOf("image_not_available") === -1 &&
//       description !== ""
//     ) {
//       setCharacters((prevState) => [...prevState, items[i]]);
//     }
//   }
// }, [items]);
