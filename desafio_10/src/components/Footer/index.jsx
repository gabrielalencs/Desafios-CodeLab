// Images

import instagramIcon from '../../assets/images/instagram.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import youtubeIcon from '../../assets/images/youtube.svg';
import twitterIcon from '../../assets/images/twitter.svg';

// Styled Component

import {
    FooterContainer, Label, Icon, 
    FooterContent, SocialMediaList, CopyHomeYou, 
    SocialMediaContainer, Developer
} from "./styles";


const Footer = () => {

    const iconsSocialMedia = [
        { icon: instagramIcon, id: 1 },
        { icon: facebookIcon, id: 2 },
        { icon: youtubeIcon, id: 3 },
        { icon: twitterIcon, id: 4 },
    ];

    return (
        <FooterContainer className="container">
            <FooterContent>
                <div>
                    <CopyHomeYou>&copy; 2024 <span>Homeyou</span></CopyHomeYou>
                </div>
                <SocialMediaContainer>
                    <Label>Conectar</Label>
                    <SocialMediaList>
                        {
                            iconsSocialMedia.map(item => (
                                <li key={item.id}>
                                    <Icon src={item.icon} alt={`icon ${item.id}`} />
                                </li>
                            ))
                        }
                    </SocialMediaList>
                </SocialMediaContainer>
            </FooterContent>
            <div>
                <Developer>
                    Desafio da comunidade
                    <a href="https://github.com/iuricode/desafios-frontend" target='_blank'> CodeLab</a>.
                    <br /> Desenvolvido por
                    <a href="https://github.com/gabrielalencs" target='_blank'> Gabriel de Alencar</a>.
                </Developer>
            </div>
        </FooterContainer>
    )
}

export default Footer;