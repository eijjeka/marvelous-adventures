import { Title, LoaderWrapper } from "./RandomCharacters.styled";
import { useEffect, useState } from "react";
import * as marvelAPI from "App/services/services.js";
import { CharactersList } from "./CharactersList/CharactersList";
import { Section } from "App/shared/Section/Section";
import { Container } from "App/shared/Container/Container";
import { Dna } from "react-loader-spinner";

export const RandomCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      marvelAPI.getRandomCharacters().then((data) => {
        const items = data.filter(
          (el) =>
            el.thumbnail.path.indexOf("image_not_available") === -1 &&
            el.description !== ""
        );

        const arr = items.slice(0, 5);
        setCharacters(arr);
        setLoading(false);
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }, []);

  return (
    <Section>
      <Container>
        <Title>Random characters</Title>
        {loading ? (
          <LoaderWrapper>
            <Dna
              visible={true}
              height="200"
              width="200"
              textAlign="center"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </LoaderWrapper>
        ) : (
          characters.length > 0 && <CharactersList data={characters} />
        )}
      </Container>
    </Section>
  );
};
