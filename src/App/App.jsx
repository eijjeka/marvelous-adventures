import { Layout } from "./components/Layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./views/Homepage";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      <NotificationContainer />
    </ThemeProvider>
  );
};
