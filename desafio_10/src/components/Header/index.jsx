import LogoHomeYou from '../../assets/images/logo.svg';

// Styled Component

import { 
    HeaderContainer, HeaderLogo, HeaderNav,
    HeaderList, HeaderItem, HeaderButton
} from './styles';


const Header = () => {
    return (
        <HeaderContainer className='container'>
            <div>
                <HeaderLogo src={LogoHomeYou} alt="Logo HomeYou" />
            </div>

            <HeaderNav>
                <HeaderList>
                    <HeaderItem>
                        <a href="#">Início</a>
                    </HeaderItem>

                    <HeaderItem>
                        <a href="#">Sobre</a>
                    </HeaderItem>

                    <HeaderItem>
                        <a href="#">Galeria</a>
                    </HeaderItem>
                </HeaderList>

                <HeaderButton>Contato</HeaderButton>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header