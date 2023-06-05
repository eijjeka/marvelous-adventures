import { useEffect, useState } from "react";
import * as marvelAPI from "App/services/services.js";

import {
  Title,
  List,
  Image,
  ItemTitle,
  TitleWriter,
  // ImageWrapper,
} from "./ComicsCharterList.styled";

export const ComicsCharterList = ({ id }) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    marvelAPI.getCharterComicsById(id).then(setComics);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Title>List of comics</Title>
      {comics.length > 0 ? (
        <List>
          {comics.map((el) => (
            <li key={el.id}>
              <Image
                src={
                  el.images[0]
                    ? `${el.images[0].path}.${el.images[0].extension}`
                    : `${el.thumbnail.path}.${el.thumbnail.extension}`
                }
                alt=""
              />
              <ItemTitle>{el.title}</ItemTitle>
              <TitleWriter>{el.creators.items[0]?.name}</TitleWriter>
            </li>
          ))}
        </List>
      ) : (
        <h2>This character don't have comics! </h2>
      )}
    </>
  );
};
