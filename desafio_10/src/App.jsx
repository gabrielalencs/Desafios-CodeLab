// Styles

import GlobalStyles from "./styles/GlobalStyles";

// Components

import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";


const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main className="container">
                <HomeSection />
                <AboutSection />
                <GallerySection />
            </main>
            <Footer />
        </>
    );
};

export default App;