import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../Layout/Layout";
import * as marvelAPI from "App/services/services.js";

import {
  Form,
  Container,
  Input,
  Button,
  Svg,
  SearchListContanier,
  SearchList,
  SearchListItem,
} from "./InputSearch.styled";
import icon from "App/assets/images/sprite.svg";

export const InputSearch = ({ placeholder }) => {
  const { updateQuery } = useContext(SearchContext);
  const [searchData, setSearchData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      marvelAPI.getCharacterByName(inputValue).then(setSearchData);
    }, 300);

    return () => clearTimeout(getData);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputValue.trim();
    updateQuery(name);
    setInputValue("");
  };

  const handleClickItem = (name) => {
    updateQuery(name);
    setInputValue(name);
    setInputValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Button type="submit" onSubmit={handleSubmit}>
          <Svg>
            <use href={icon + "#icon-search"} />
          </Svg>
        </Button>
        <Input
          placeholder={placeholder}
          onChange={handleChange}
          value={inputValue}
        />
      </Container>
      {searchData && searchData.length > 0 && (
        <SearchListContanier count={searchData.length}>
          <SearchList count={searchData.length}>
            {searchData.map((el) => (
              <SearchListItem
                key={el.id}
                onClick={() => handleClickItem(el.name)}
              >
                {el.name}
              </SearchListItem>
            ))}
          </SearchList>
        </SearchListContanier>
      )}
    </Form>
  );
};
