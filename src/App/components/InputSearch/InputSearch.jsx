import { useState, useContext } from "react";
import { SearchContext } from "../Layout/Layout";

import { Container, Input, Button, Svg } from "./InputSearch.styled";
import icon from "App/assets/images/sprite.svg";

export const InputSearch = ({ placeholder }) => {
  const { updateQuery } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputValue.trim();
    updateQuery(name);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};
