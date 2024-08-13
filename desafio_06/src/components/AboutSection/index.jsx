import {
    AboutContainer, ContainerIcon, ContainerIcons,
    ContainerTexts, Description,
    Icon, Title
} from "./styles";

import IconSmile from '../../assets/images/smile.svg';
import IconEmail from '../../assets/images/mail.svg';
import IconInstagram from '../../assets/images/instagram.svg';
import IconPhone from '../../assets/images/phone.svg';


const AboutSection = () => {
    return (
        <AboutContainer>
            <ContainerTexts>
                <Title>
                    Sobre mim
                </Title>
                <Description>
                    Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora) sou o criador do eFront, um material de ensino de frontend pela internet. Atualmente sou freelancer como Frontend Developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.
                </Description>
            </ContainerTexts>

            <ContainerIcons>
                <ContainerIcon>
                    <Icon>
                        <img src={IconSmile} alt="Icon Smile" />
                    </Icon>
                </ContainerIcon>

                <ContainerIcon>
                    <Icon>
                        <img src={IconEmail} alt="Icon Email" />
                    </Icon>
                </ContainerIcon>

                <ContainerIcon>
                    <Icon>
                        <img src={IconInstagram} alt="Icon Instagram" />
                    </Icon>
                </ContainerIcon>

                <ContainerIcon>
                    <Icon>
                        <img src={IconPhone} alt="Icone Phone" />
                    </Icon>
                </ContainerIcon>
            </ContainerIcons>
        </AboutContainer>
    )
}

export default AboutSection