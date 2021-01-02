import Header from "./components/header/Header";
import React from "react";
import Cards from "./components/cards/Cards";
<<<<<<< HEAD
import { StateProvider } from "./components/misc/StateContext";
=======
import { StateProvider } from "./components/StateContext";
>>>>>>> 35f9a76bbde39bb5a37c0f186a968202471cf0ae
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
