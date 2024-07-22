import React from 'react';
import './styles.css'

const SocialNetworkIcon = ({ iconSrc, altIcon }) => {
    return (
        <div className='socialNetworkIcon'>
            <img src={iconSrc} alt={altIcon} />
        </div>
    )
}

export default SocialNetworkIcon