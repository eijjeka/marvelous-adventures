import React, { createContext, useState } from "react";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [nameComics, setNameComics] = useState(null);
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [order, setOrder] = useState(null);

  return (
    <CharactersContext.Provider
      value={{
        nameComics,
        setNameComics,
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
