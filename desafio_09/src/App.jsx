import './App.css';

// Components

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ControlSection from './components/ControlSection';


const App = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <ControlSection />
            </main>
        </>
    )
}

export default App;
