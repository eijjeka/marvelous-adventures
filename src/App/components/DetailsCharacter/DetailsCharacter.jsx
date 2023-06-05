import { useEffect, useState } from "react";
import * as marvelAPI from "App/services/services.js";
import moment from "moment";

import {
  Container,
  Svg,
  Meta,
  Title,
  CloseBtn,
  Date,
  CardImgContainer,
  CardImg,
  Description,
  WrapperCard,
} from "./DetailsCharacter.styled";

import icon from "App/assets/images/sprite.svg";
import { ComicsCharterList } from "./ComicsCharterList";
import { Modal } from "App/components/Modal";

export const DetailsCharacter = ({ setActive, id }) => {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    marvelAPI.getCharacterById(id).then((data) => setCharacter(...data));
    // eslint-disable-next-line
  }, []);
  console.log("!!!!!!!", character.modified);
  return (
    <>
      {character && (
        <Modal setActive={setActive}>
          <Container>
            <CloseBtn onClick={() => setActive(false)}>
              <Svg>
                <use href={icon + "#icon-close"} />
              </Svg>
            </CloseBtn>
            <WrapperCard>
              <CardImgContainer>
                <CardImg
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
              </CardImgContainer>
              <Meta>
                <Title>{character.name}</Title>
                <Date>{moment(character.modified).format("MMMM D, YYYY")}</Date>
                <Description>
                  {character.description
                    ? character.description
                    : "Oops... This character doesn't have a description, but we're working on it!"}
                </Description>
                <ComicsCharterList id={id} />
              </Meta>
            </WrapperCard>
          </Container>
        </Modal>
      )}
    </>
  );
};
