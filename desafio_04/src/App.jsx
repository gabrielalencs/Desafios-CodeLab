import './App.css';
import Login from './Components/ContainerLogin/ContainerLogin';
import imageHero from './assets/hero.svg';

function App() {

    return (
        <>
            <div className='containerImageHero'>
                <img src={imageHero} alt="" />
            </div>

            <Login />
        </>
    )
}

export default App
