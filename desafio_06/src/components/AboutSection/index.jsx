import {
    AboutContainer, ContainerIcon, ContainerIcons,
    ContainerTexts, ContentIcon, Description,
    Icon, Title, TitleIcon
} from "./styles";

import IconSmile from '../../assets/images/smile.svg';
import IconEmail from '../../assets/images/mail.svg';
import IconInstagram from '../../assets/images/instagram.svg';
import IconPhone from '../../assets/images/phone.svg';


const AboutSection = () => {
    const icons = [
        { icon: IconSmile, alt: 'Icon Smile', title: 'Nome', content: 'Iuri Silva' },
        { icon: IconEmail, alt: 'Icon Email', title: 'E-mail', content: 'codelab@gmail.com'  },
        { icon: IconInstagram, alt: 'Icon Instagram', title: 'Instagram', content: '@iuricode' },
        { icon: IconPhone, alt: 'Icon Phone', title: 'Telefone', content: '(14) 99999-9999'  },
    ];

    return (
        <AboutContainer className="container">
            <ContainerTexts>
                <Title>
                    Sobre mim
                </Title>
                <Description>
                    Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora) sou o criador do eFront, um material de ensino de frontend pela internet. Atualmente sou freelancer como Frontend Developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.
                </Description>
            </ContainerTexts>

            <ContainerIcons>
                {
                    icons.map(({ icon, alt, title, content }) => (
                        <ContainerIcon key={icon}>
                            <Icon>
                                <img 
                                    src={icon} 
                                    alt={alt} 
                                    style={{width: '3.2rem'}} 
                                />
                            </Icon>
                            <TitleIcon>{title}</TitleIcon>
                            <ContentIcon>{content}</ContentIcon>
                        </ContainerIcon>
                    ))
                }
            </ContainerIcons>
        </AboutContainer>
    )
}

export default AboutSecti