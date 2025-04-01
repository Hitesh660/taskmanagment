import { createGlobalStyle } from "styled-components";
export const GlobalCss = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: "Noto Serif", serif;
    font-optical-sizing: auto;
    font-style: normal;
  font-variation-settings:
    "wdth" 100;
}

html, body {
    width: 100vw;
    height: 100vh;
}

body{
background-color: #1ea1ff;
}

h1{
    overflow: hidden;
}
`;