import { Hero } from "App/components/Hero/Hero";
import { CharacterList } from "App/components/CharacterList";
import { RandomCharacters } from "App/components/RandomCharacters";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <CharacterList />
      <RandomCharacters />
    </>
  );
};
