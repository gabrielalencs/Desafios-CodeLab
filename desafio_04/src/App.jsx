import './App.css';
import ContainerImageHero from './Components/ContainerImageHero/ContainerImageHero';
import Login from './Components/ContainerLogin/ContainerLogin';
import Footer from './Components/Footer/Footer';

function App() {

    return (
        <>
            <main className='mainContent'>
                <ContainerImageHero />
                <Login />
            </main>
            
            <Footer />
        </>
    )
}

export default App