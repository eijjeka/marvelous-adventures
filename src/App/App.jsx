import { Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import theme from "./services/theme";
import { Loader } from "./components/Loader";

const Layout = lazy(() =>
  import("./components/Layout" /* webpackChunkName: "layout" */)
);

const HomePage = lazy(() =>
  import("./views/Homepage" /* webpackChunkName: "HomePage" */)
);

const Characters = lazy(() =>
  import("./views/Characters" /* webpackChunkName: "Characters" */)
);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/characters" element={<Characters />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
