import { 
    IntroductionContainer, Content, Title, 
    TitleName, Profession, ContainerImage, Image 
} from "./styles";

import imageHero from '../../assets/images/image.svg'

const IntroductionSection = () => {
    return (
        <IntroductionContainer>
            <Content>
                <Title>
                    Olá, eu sou
                    <TitleName>Iuri Silva</TitleName>
                </Title>
                <Profession>Desenvolvedor Frontend & UI Designer.</Profession>
            </Content>
            <ContainerImage>
                <Image src={imageHero} alt="imagem de um globo terrestre em cima de um celular" />
            </ContainerImage>
        </IntroductionContainer>
    )
}

export default IntroductionSection