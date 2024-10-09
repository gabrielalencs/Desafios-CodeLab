// Styles

import GlobalStyles from "./styles/GlobalStyles";

// Components

import Header from "./components/Header";
import Home from "./components/Home";


const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main className="container">
                <Home />
            </main>
        </>
    );
};

export default App;