import { Wrapper } from "./CharactersList.styled";
import { CharactersCard } from "../CharactersCard";
import { useState } from "react";
import { CardImg } from "./CharactersList.styled";
import { useEffect } from "react";

export const CharactersList = ({ data }) => {
  const [activeCard, setActiveCard] = useState(data[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prevActiveCard) => {
        const activeIndex = data.findIndex(
          (card) => card.id === prevActiveCard.id
        );
        const nextIndex = (activeIndex + 1) % data.length;
        return data[nextIndex];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <>
      <CardImg
        src={`${activeCard.thumbnail.path}.${activeCard.thumbnail.extension}`}
      />
      <Wrapper>
        {data.map((el) => (
          <CharactersCard
            active={activeCard}
            key={el.id}
            item={el}
            handleClick={setActiveCard}
          />
        ))}
      </Wrapper>
    </>
  );
};
