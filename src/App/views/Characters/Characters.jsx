import { CharactersProvider } from "./CharactersContext";
import { Hero } from "App/components/CharactersPage/Hero";
import { CharactersFilter } from "App/components/CharactersPage/CharactersFilter";
import { SectionCharactersByFilter } from "App/components/CharactersPage/SectionCharactersByFilter";
import { useEffect } from "react";

export const Characters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CharactersProvider>
      <Hero />
      <CharactersFilter />
      <SectionCharactersByFilter />
    </CharactersProvider>
  );
};
