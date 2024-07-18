import './ContainerImageHero.css';
import imageHero from '../../assets/hero.svg';

const ContainerImageHero = () => {
    return (
        <div className='containerImageHero'>
            <img src={imageHero} alt="ilustração de uma pessoa olhando para um globo terrestre através de um binoculos" />
        </div>
    )
}

export default ContainerImageHero