import './App.css';

import DogStoriesSection from './components/DogStoriesSection';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection";
import ProductsSection from './components/ProductsSection';

function App() {

    return (
        <>
            <main>
                <HeroSection />
                <DogStoriesSection />
                <ProductsSection />
            </main>
            <Footer />
        </>
    )
}

export default App
