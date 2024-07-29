import './styles.css';

import iconGoogle from '../../assets/images/logo-google.svg';
import iconFacebook from '../../assets/images/logo-facebook.svg';
import iconTwitter from '../../assets/images/logo-twitter.svg';
import iconInstagram from '../../assets/images/logo-instagram.svg';

const SocialNetworkIcon = () => {
    const socialNewtworks = [
        { name: 'Icone Google', icon: iconGoogle },
        { name: 'Icone Facebook', icon: iconFacebook },
        { name: 'Icone Twitter', icon: iconTwitter },
        { name: 'Icone Instagram', icon: iconInstagram }
    ];

    return (
        socialNewtworks.map(({ name, icon }) => (
            <div className='socialNetworkIcon' key={name}>
                <img src={icon} alt={name} />
            </div>
        ))
    )
}

export default SocialNetworkIcon