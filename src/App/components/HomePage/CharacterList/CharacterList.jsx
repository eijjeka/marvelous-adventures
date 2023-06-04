import { useState, useEffect, useContext, useRef } from "react";
import { SearchContext } from "App/components/Layout/Layout";
import * as marvelAPI from "App/services/services.js";
import notFound from "App/assets/images/PlaceHolder.png";
import { LoaderWrapper } from "App/components/HomePage/RandomCharacters/RandomCharacters.styled";
import { Dna } from "react-loader-spinner";

import { Container } from "App/shared/Container/Container";
import { DetailsCharacter } from "../../DetailsCharacter";
import {
  Section,
  Title,
  Item,
  List,
  CardImgContainer,
  CardImg,
  CardTitle,
  NotFoundImg,
} from "./CharacterList.styled";

export const CharacterList = () => {
  const sectionRef = useRef();
  const { query } = useContext(SearchContext);
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [findData, setFindData] = useState(false);
  const [loading, setLoading] = useState(true);

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

      setFindData(true);
      setLoading(false);
    }
  }, [query]);

  const handleClick = (e) => {
    setId(e.currentTarget.id);
    setIsOpen(true);
  };

  return (
    <>
      {findData && (
        <Section ref={sectionRef}>
          <Container value={findData}>
            <Title>Search Characters</Title>
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
            ) : characters && characters.length > 0 ? (
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
            ) : (
              <NotFoundImg src={notFound} alt="" />
            )}
          </Container>
        </Section>
      )}
      {isOpen && <DetailsCharacter setActive={setIsOpen} id={id} />}
    </>
  );
};
