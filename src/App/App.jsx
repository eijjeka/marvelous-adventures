import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router-dom";

import { RandomCharacters } from "./components/RandomCharacters";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RandomCharacters />} />
      </Route>
    </Routes>
  );
};
