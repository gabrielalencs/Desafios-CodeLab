import { 
    ContainerPowered, FooterContainer, FooterLimit, 
    TextCopyright, TextPowered 
} from './styles';

import IconLogo from '../../../assets/images/logo.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLimit className='container'>
                <div>
                    <TextCopyright>
                        &copy; 2022 - Iuri Silva
                    </TextCopyright>
                </div>
                
                <ContainerPowered>
                    <TextPowered>Powered by</TextPowered>
                    <img src={IconLogo} alt="Icon da Logo" />
                </ContainerPowered>
            </FooterLimit>
        </FooterContainer>
    )
}

export default Footer