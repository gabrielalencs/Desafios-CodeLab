import './ContainerImageHero.css'
import imageHero from '../../assets/hero.svg';

const ContainerImageHero = () => {
    return (
        <div className='containerImageHero'>
            <img src={imageHero} alt="" />
        </div>
    )
}

export default ContainerImageHero