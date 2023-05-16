import { Layout } from "./components/Layout";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./views/Homepage";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import theme from "./services/theme";
import { ComicsPage } from "./views/ComicsPage/ComicsPage";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="comics" element={<ComicsPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
