import './styles.css';

import logoHeader from '../../assets/images/logo.svg';

import SocialNetworkIcon from '../SocialNetworkIcon';


const Header = () => {
    return (
        <header className='header'>
            <div>
                <img src={logoHeader} alt="Logo da empresa Studio Ghibli" />
            </div>

            <div className='containerSocialNetwork'>
                <SocialNetworkIcon />
            </div>
        </header>
    )
}

export default Header