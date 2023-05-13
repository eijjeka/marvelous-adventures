import { useState, useEffect } from "react";

import {
  Wrapper,
  InnerWrapper,
  CardImgContainer,
} from "./CharactersList.styled";
import { CharactersCard } from "../CharactersCard";
import { DetailsCharacter } from "App/components/DetailsCharacter";
import { Modal } from "App/components/Modal";

import { CardImg } from "./CharactersList.styled";

export const CharactersList = ({ data }) => {
  const [activeCard, setActiveCard] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prevActiveCard) => {
        const activeIndex = data.findIndex(
          (card) => card.id === prevActiveCard.id
        );

        if (activeIndex === data.length - 1) {
          setActiveCard(data[0]);
          return;
        }
        const nextIndex = activeIndex + 1;
        return data[nextIndex];
      });
    }, 3500);
    return () => clearInterval(interval);
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
      {isOpen && (
        <Modal setActive={setIsOpen}>
          <DetailsCharacter id={activeCard.id} onClose={setIsOpen} />
        </Modal>
      )}
    </Wrapper>
  );
};
