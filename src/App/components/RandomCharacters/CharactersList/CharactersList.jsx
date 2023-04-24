import { Wrapper } from "./CharactersList.styled";
import { CharactersCard } from "../CharactersCard";
import { useState } from "react";

export const CharactersList = ({ data }) => {
  const [activeCard, setActiveCard] = useState(data[0]);

  function timerSlider() {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      if (data.length - 1 === i) {
        return setActiveCard(data[0]);
      } else if (activeCard.id === data[i].id) {
        return setActiveCard(data[i + 1]);
      }
    }
  }

  setTimeout(() => timerSlider(), 3500);

  return (
    data && (
      <>
        <img
          width={330}
          height={350}
          src={`${activeCard.thumbnail.path}.${activeCard.thumbnail.extension}`}
          alt="card"
        />
        <Wrapper>
          {data.map((el) => (
            <CharactersCard key={el.id} item={el} handleClick={setActiveCard} />
          ))}
        </Wrapper>
      </>
    )
  );
};
