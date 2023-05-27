import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --main-text-color: #FAFAFA;
  --secondary-text-color: rgba(255, 255, 255, 0.7);
  --main-bg-color: #0C0B0B;
  --panther-color: #34387F;
  --spider-color: #600404;
  --hulk-color: #5B7F3C;
  --accent-color: #34387F;
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

export default GlobalStyles;
