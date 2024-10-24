// Images

import imageHouseSeven from '../../assets/images/7.png';
import imageHouseEight from '../../assets/images/8.png';
import imageHouseNine from '../../assets/images/9.png';

// Styled Component

import {
    ContainerImages, DescriptionImages, GalleryContainer, Label,
    TextContainer, Title, TitleImages
} from "./styles";


const GallerySection = () => {
    return (
        <GalleryContainer>
            <div>
                <TextContainer>
                    <Label>Galeria</Label>
                    <Title>Alguns de nossos trabalhos feitos com amor</Title>
                </TextContainer>

                <ContainerImages>
                    <div>
                        <img src={imageHouseSeven} alt="imagem da casa 7" />
                    </div>

                    <div>
                        <TitleImages>Móveis e interiores</TitleImages>
                        <DescriptionImages>
                            Móveis e interiores: elegância e funcionalidade para transformar seu espaço.
                        </DescriptionImages>
                    </div>
                </ContainerImages>
            </div>

            <div>
                <ContainerImages>
                    <div>
                        <img src={imageHouseEight} alt="imagem da casa 8" />
                    </div>

                    <div>
                        <TitleImages>Hotéis de luxo</TitleImages>
                        <DescriptionImages>
                            Hotéis de luxo oferecem conforto excepcional, serviços personalizados e acomodações elegantes.
                        </DescriptionImages>
                    </div>
                </ContainerImages>

                <ContainerImages>
                    <div>
                        <img src={imageHouseNine} alt="imagem da casa 9" />
                    </div>

                    <div>
                        <TitleImages>Piscina residencial</TitleImages>
                        <DescriptionImages>
                            Piscina residencial: um oásis privado que oferece lazer, relaxamento e diversão no conforto do seu lar.
                        </DescriptionImages>
                    </div>
                </ContainerImages>
            </div>
        </GalleryContainer>
    )
}

export default GallerySection;