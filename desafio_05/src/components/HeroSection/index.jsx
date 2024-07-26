import './styles.css';

import heroImage from '../../assets/images/image.svg';
import iconPlay from '../../assets/images/Play.svg'

import Button from '../Button';

const HeroSection = () => {
    return (
        <section className='hero'>
            <div className='containerImageHero'>
                <img src={heroImage} alt="imagem de dois fantasminhas do anime viagem de chihiro" className='imageHero' />
            </div>

            <div className='heroContent'>
                <span className='heroDirector'>Hayao Miyazaki</span>
                <h1 className='heroTitle'>A viagem de Chihiro</h1>
                <p className='heroDescription'>
                    Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.
                </p>

                <div className='containerButtons'>
                    <Button icon={iconPlay} text='Assistir Agora' />
                    <Button text='Assista o Trailer' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection