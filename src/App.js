import Header from "./components/Header";
import Filters from "./components/Filters";
import Cards from "./components/Cards";
import { StateProvider } from "./components/StateContext";

const App = () => {
    return (
        <StateProvider>
            <div className="App">
                <Header />
                <Filters />
                <Cards />
            </div>
        </StateProvider>
    );
};

export default App;
