// Styles

import GlobalStyles from "./styles/GlobalStyles";

// Components

import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";


const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main className="container">
                <HomeSection />
                <AboutSection />
            </main>
        </>
    );
};

export default App;