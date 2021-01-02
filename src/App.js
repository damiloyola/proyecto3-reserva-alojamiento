import Header from "./components/header/Header";
import React from "react";
import Cards from "./components/cards/Cards";
import { StateProvider } from "./components/misc/StateContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing:border-box;
    }
    body{
        margin:0;
        font-family: "Roboto", "sans-serif";
        
    }
`;

const App = () => {
  return (
    <StateProvider>
      <GlobalStyle />
      <Header />

      <Cards />
    </StateProvider>
  );
};

export default App;
