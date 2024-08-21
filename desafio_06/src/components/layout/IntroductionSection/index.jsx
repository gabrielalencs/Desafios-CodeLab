import { 
    IntroductionContainer, Title, 
    TitleName, Profession,  
    Image
} from "./styles";

import Button from "../../Button";

import ImageHero from '../../../assets/images/image.svg';

const IntroductionSection = () => {
    return (
        <IntroductionContainer>
            <div>
                <Title>
                    Olá, eu sou
                    <TitleName>Iuri Silva</TitleName>
                </Title>
                <Profession>Desenvolvedor Frontend & UI Designer.</Profession>
                <Button 
                    text='Baixar currículo' 
                    marginTop='3rem' 
                />
            </div>
            <div>
                <Image src={ImageHero} alt="imagem de um globo terrestre em cima de um celular" />
            </div>
        </IntroductionContainer>
    )
}

export default IntroductionSection