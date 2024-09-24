import './App.css';

// Components

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ControlSection from './components/ControlSection';
import GallerySection from './components/GallerySection';
import AccordionSection from './components/AccordionSection';
import Footer from './components/Footer';


const App = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <ControlSection />
                <GallerySection />
                <AccordionSection />
            </main>
            <Footer />
        </>
    )
}

export default App;
