import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { useState, createContext } from "react";

export const SearchContext = createContext();

export const Layout = ({ children }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <SearchContext.Provider value={{ query, updateQuery }}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </SearchContext.Provider>
  );
};
