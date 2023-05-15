import { useEffect, useState } from "react";
import * as marvelAPI from "App/services/services.js";
import moment from "moment";

import {
  Svg,
  Meta,
  Title,
  CloseBtn,
  Date,
  CardImg,
  Description,
  Wrapper,
} from "./DetailsCharacter.styled";

import icon from "App/assets/images/sprite.svg";
import { ComicsCharterList } from "../ComicsCharterList";
import { Modal } from "App/components/Modal";

export const DetailsCharacter = ({ setActive, id }) => {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    marvelAPI.getCharacterById(id).then((data) => setCharacter(...data));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {character && (
        <Modal setActive={setActive}>
          <CloseBtn onClick={() => setActive(false)}>
            <Svg>
              <use href={icon + "#icon-close"} />
            </Svg>
          </CloseBtn>
          <Wrapper>
            <CardImg
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
            <Meta>
              <Title>{character.name}</Title>
              <Date>{moment(character.modified).format("MMMM D, YYYY")}</Date>
              <Description>{character.description}</Description>
              <ComicsCharterList id={id} />
            </Meta>
          </Wrapper>
        </Modal>
      )}
    </>
  );
};
