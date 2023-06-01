import { Hero } from "App/components/CharactersPage/Hero";
import { SectionCharactersByFilter } from "App/components/CharactersPage/SectionCharactersByFilter";
import { CharactersProvider } from "./CharactersContext";

export const Characters = () => {
  return (
    <CharactersProvider>
      <Hero />
      <SectionCharactersByFilter />
    </CharactersProvider>
  );
};
