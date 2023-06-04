import { useState, useEffect } from "react";

import {
  Wrapper,
  InnerWrapper,
  CardImgContainer,
} from "./CharactersList.styled";
import { CharactersCard } from "../CharactersCard";
import { DetailsCharacter } from "App/components/DetailsCharacter";

import { CardImg } from "./CharactersList.styled";

export const CharactersList = ({ data }) => {
  const [activeCard, setActiveCard] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);

  const updateActiveCard = () => {
    setActiveCard((prevActiveCard) => {
      const activeIndex = data.findIndex(
        (card) => card.id === prevActiveCard.id
      );
      const nextIndex = (activeIndex + 1) % data.length;
      return data[nextIndex];
    });
  };

  useEffect(() => {
    const interval = setInterval(updateActiveCard, 3500);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [data]);

  const handleClickCard = (data) => {
    setActiveCard(data);
    setIsOpen(true);
  };

  return (
    <Wrapper>
      <CardImgContainer>
        <CardImg
          src={`${activeCard.thumbnail.path}.${activeCard.thumbnail.extension}`}
        />
      </CardImgContainer>
      <InnerWrapper>
        {data.map((el) => (
          <CharactersCard
            active={activeCard}
            key={el.id}
            item={el}
            handleClick={handleClickCard}
          />
        ))}
      </InnerWrapper>
      {isOpen && <DetailsCharacter id={activeCard.id} setActive={setIsOpen} />}
    </Wrapper>
  );
};
