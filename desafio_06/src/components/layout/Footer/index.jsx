import {
    ContainerPowered, Credits, CreditsLink, FooterContainer, 
    FooterContent, FooterLimit, TextCopyright, TextPowered
} from './styles';

import IconLogo from '../../../assets/images/logo.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLimit className='container'>
                <FooterContent>
                    <div>
                        <TextCopyright>
                            &copy; 2022 - Iuri Silva
                        </TextCopyright>
                    </div>

                    <ContainerPowered>
                        <TextPowered>Powered by</TextPowered>
                        <img src={IconLogo} alt="Icon da Logo" />
                    </ContainerPowered>
                </FooterContent>

                <Credits className="footerParagraph">
                    Desafio da comunidade
                    <CreditsLink href="https://github.com/iuricode/desafios-frontend"
                        target='_blank'
                        rel="noopener noreferrer"> CodeLab</CreditsLink>.

                    <br /> Desenvolvido por

                    <CreditsLink
                        href="https://github.com/gabrielalencs"
                        target='_blank'
                        rel="noopener noreferrer"> Gabriel de Alencar</CreditsLink>.
                </Credits>
            </FooterLimit>
        </FooterContainer>
    )
}

export default Footer