import { ContainerPowered, FooterContainer, TextCopyright, TextPowered } from './styles';

import IconLogo from '../../../assets/images/logo.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <TextCopyright>
                    &copy; 2022 - Iuri Silva
                </TextCopyright>
            </div>
            <ContainerPowered>
                <TextPowered>Powered by</TextPowered>
                <img src={IconLogo} alt="Icon da Logo" />
            </ContainerPowered>
        </FooterContainer>
    )
}

export default Footer