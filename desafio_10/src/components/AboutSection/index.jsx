// Images

import imageHouseFive from '../../assets/images/5.png';
import imageHouseSix from '../../assets/images/6.png';

// Styled Component

import { 
    AboutContainer, ContentContainer,
    Description, Title,
    ImagesContainer, Label
} from "./styles";


const AboutSection = () => {
    return (
        <AboutContainer>
            <ContentContainer>
                <Label>Sobre</Label>
                <Title>Transformamos a sua casa dos sonhos em realidade</Title>
                <Description>
                    Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.
                </Description>
            </ContentContainer>

            <ImagesContainer>
                <img src={imageHouseFive} alt="imagem da casa 5" />
                <img src={imageHouseSix} alt="imagem da casa 6" />
            </ImagesContainer>
        </AboutContainer>
    )
}

export default AboutSection;