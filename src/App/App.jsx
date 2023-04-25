import { Layout } from "./components/Layout";
import { Hero } from "./components/Layout/Hero/Hero";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { RandomCharacters } from "./components/RandomCharacters";

const Global = createGlobalStyle`
:root {
  --main-text-color: #FAFAFA;
  --secondary-text-color: rgba(255, 255, 255, 0.7);
  --main-bg-color: #0C0B0B;
  --panther-color: #34387F;
  --spider-color: #600404;
  --hulk-color: #5B7F3C;
}  

body {
  font-family: "Poppins", sans-serif;
  color: var(--main-text-color);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
}

`;

const theme = {
  media: {
    phone: "",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1440px)",
  },

  panther: {
    color: "#34387F",
    bgGradient:
      "linear-gradient(180deg, #34387F 36.46%, rgba(52, 56, 127, 0) 100%)",
    buttonGradient:
      "radial-gradient(81.15% 81.15% at 50% 18.85%, #34387F 0%, #171717 100%)",
  },
  spider: {
    color: "#600404",
    bgGradient:
      "linear-gradient(180deg, #600404 36.46%, rgba(52, 56, 127, 0) 100%)",
    buttonGradient:
      "radial-gradient(81.15% 81.15% at 50% 18.85%, #600404 0%, #171717 100%)",
  },
  hulk: {
    color: "#5B7F3C",
    bgGradient:
      "linear-gradient(180deg, #5B7F3C 36.46%, rgba(52, 56, 127, 0) 100%)",
    buttonGradient:
      "radial-gradient(81.15% 81.15% at 50% 18.85%, #5B7F3C 0%, #171717 100%)",
  },
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <RandomCharacters />
            </Layout>
          }
        >
          <Route index element={<RandomCharacters />} />
          <Route index element={<Hero />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
