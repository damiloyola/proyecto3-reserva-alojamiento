import Header from "./components/Header";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { StateProvider } from "./components/StateContext";
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
            <Filters />
            <Cards />
        </StateProvider>
    );
};

export default App;
