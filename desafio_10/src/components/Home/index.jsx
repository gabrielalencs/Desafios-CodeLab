// Images

import imageHouseOne from '../../assets/images/1.png';
import imageHouseTwo from '../../assets/images/2.png';
import imageHouseThree from '../../assets/images/3.png';
import imageHouseFour from '../../assets/images/4.png';

// Styled Component

import { 
    HomeContainer, ContentContainer, MainTitle, 
    Description,
    ImagesContainer
} from './styles'

const Home = () => {

    const homeImages = [
        { id: 1, img: imageHouseOne },
        { id: 2, img: imageHouseTwo },
        { id: 3, img: imageHouseThree },
        { id: 4, img: imageHouseFour }
    ]

    return (
        <HomeContainer>
            <ContentContainer>
                <MainTitle>Faça da <span>your home</span> um paraíso</MainTitle>
                <Description>
                    Encontre uma variedade de propriedades que combinam com você. 
                    Esqueça todas as dificuldades em encontrar uma residência.
                </Description>
            </ContentContainer>

            <ImagesContainer>
                {
                    homeImages.map(image => (
                        <img 
                            key={image.id} 
                            src={image.img} 
                            alt={`imagem da casa ${image.id}`} 
                        />
                    ))
                }
            </ImagesContainer>
        </HomeContainer>
    )
}

export default Home