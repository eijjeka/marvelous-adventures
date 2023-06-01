import React, { createContext, useState } from "react";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [comics, setComics] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");

  return (
    <CharactersContext.Provider
      value={{
        comics,
        setComics,
        date,
        setDate,
        name,
        setName,
        order,
        setOrder,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContext;
