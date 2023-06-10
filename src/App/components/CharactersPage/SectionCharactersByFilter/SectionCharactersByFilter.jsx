import { CharactersContext } from "App/views/Characters/CharactersContext";
import { useContext, useEffect, useState } from "react";
import {
  Section,
  List,
  Item,
  CardImg,
  Title,
  NotFoundImg,
} from "./SectionCharactersByFilter.styled";
import * as marvelAPI from "App/services/services.js";
import { Container } from "App/shared/Container/Container";
import notFound from "App/assets/images/PlaceHolder.png";
import { DetailsCharacter } from "App/components/DetailsCharacter";
import { LoaderWrapper } from "App/components/HomePage/RandomCharacters/RandomCharacters.styled";
import { Dna } from "react-loader-spinner";

export const SectionCharactersByFilter = () => {
  const { nameComics, date, name, order } = useContext(CharactersContext);
  const [characters, setCharacters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [idCharacter, setIdCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect", date);
    marvelAPI
      .getCharactersByFilter(name, nameComics, order, date)
      .then((data) => {
        console.log(data.results);
        setCharacters(data.results);
        setLoading(false);
      });
  }, [nameComics, date, name, order]);

  const handleClickCard = (id) => {
    setIdCharacter(id);
    setIsOpen(true);
  };

  return (
    <Section>
      <Container>
        {loading ? (
          <LoaderWrapper>
            <Dna
              visible={true}
              height="200"
              width="200"
              textAlign="center"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </LoaderWrapper>
        ) : characters.length > 0 ? (
          <List>
            {characters.map((el) => (
              <Item key={el.id} onClick={() => handleClickCard(el.id)}>
                <CardImg
                  src={`${el.thumbnail.path}.${el.thumbnail.extension}`}
                />
                <Title>{el.name}</Title>
              </Item>
            ))}
          </List>
        ) : (
          <NotFoundImg src={notFound} alt="" />
        )}
        {isOpen && <DetailsCharacter id={idCharacter} setActive={setIsOpen} />}
      </Container>
    </Section>
  );
};
