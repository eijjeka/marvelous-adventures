import { useState, useEffect, useContext, useRef } from "react";
import { SearchContext } from "App/components/Layout/Layout";
import * as marvelAPI from "App/services/services.js";

import { Container } from "App/shared/Container/Container";
import { DetailsCharacter } from "../DetailsCharacter";
import {
  Section,
  Title,
  Item,
  List,
  CardImgContainer,
  CardImg,
  CardTitle,
} from "./CharacterList.styled";

export const CharacterList = () => {
  const sectionRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const { query } = useContext(SearchContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (query !== "") {
      marvelAPI.getCharacterByName(query).then((data) => {
        const items = data?.filter(
          (el) => el.thumbnail.path.indexOf("image_not_available") === -1
        );
        setCharacters(items);

        const elementPosition = sectionRef.current.offsetTop;
        const offsetPosition = elementPosition - 90;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    }
  }, [query]);

  const handleClick = (e) => {
    setId(e.currentTarget.id);
    setIsOpen(true);
  };

  return (
    <>
      <Section ref={sectionRef}>
        {characters && characters.length > 0 && (
          <Container>
            <Title>Search Characters</Title>
            <List>
              {characters.map((el) => (
                <Item key={el.id} onClick={handleClick} id={el.id}>
                  <CardImgContainer>
                    <CardImg
                      src={`${el.thumbnail.path}.${el.thumbnail.extension}`}
                    />
                  </CardImgContainer>
                  <CardTitle>{el.name}</CardTitle>
                </Item>
              ))}
            </List>
          </Container>
        )}
      </Section>
      {isOpen && <DetailsCharacter setActive={setIsOpen} id={id} />}
    </>
  );
};
