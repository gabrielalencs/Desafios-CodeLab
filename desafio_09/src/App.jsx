import './App.css';

// Components

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ControlSection from './components/ControlSection';
import GallerySection from './components/GallerySection';


const App = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <ControlSection />
                <GallerySection />
            </main>
        </>
    )
}

export default App;
