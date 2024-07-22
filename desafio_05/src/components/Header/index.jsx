import './styles.css';

import logoHeader from '../../assets/images/logo.svg';
import iconGoogle from '../../assets/images/logo-google.svg';
import iconFacebook from '../../assets/images/logo-facebook.svg';
import iconTwitter from '../../assets/images/logo-twitter.svg';
import iconInstagram from '../../assets/images/logo-instagram.svg';

import SocialNetworkIcon from '../SocialNetworkIcon';


const Header = () => {
    return (
        <header className='header'>
            <div>
                <img src={logoHeader} alt="Logo da empresa Studio Ghibli" />
            </div>

            <div className='containerSocialNetwork'>
               <SocialNetworkIcon iconSrc={iconGoogle} altIcon='Icone do Google' />
               <SocialNetworkIcon iconSrc={iconFacebook} altIcon='Icone do Facebook' />
               <SocialNetworkIcon iconSrc={iconTwitter} altIcon='Icone do Twitter' />
               <SocialNetworkIcon iconSrc={iconInstagram} altIcon='Icone do Instagram' />
            </div>
        </header>
    )
}

export default Header