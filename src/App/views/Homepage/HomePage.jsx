import { Hero } from "App/components/MainPage/Hero/Hero";
import { CharacterList } from "App/components/HomePage/CharacterList";
import { RandomCharacters } from "App/components/HomePage/RandomCharacters";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <CharacterList />
      <RandomCharacters />
    </>
  );
};
