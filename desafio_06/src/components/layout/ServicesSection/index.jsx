import { Fragment } from 'react';

import {
    Card, CardTitle, ContainerCards,
    ServicesContainer, Title
} from './styles';

import IconCode from '../../../assets/images/code.svg';
import IconFigma from '../../../assets/images/figma.svg';
import IconSmartphone from '../../../assets/images/smartphone.svg';


const ServicesSection = () => {
    const cardInfos = [
        { icon: IconCode, alt: 'Icon Code', title: 'Criação de sites' },
        { icon: IconFigma, alt: 'Icon Figma', title: 'UI/UX Designer' },
        { icon: IconSmartphone, alt: 'Icon Smartphone', title: 'Sites responsivos' }
    ];

    return (
        <ServicesContainer id='services'>
            <Title>Serviços</Title>
            <ContainerCards>
                {

                    cardInfos.map(({ icon, alt, title }) => (
                        <Card key={alt}>
                            <img src={icon} alt={alt} />
                            <CardTitle>
                                {title.split(' ').map((word, index) => (
                                    <Fragment key={index}>
                                        {word}
                                        {index === 0 && <br />}
                                    </Fragment>
                                ))}
                            </CardTitle>
                        </Card>
                    ))
                }
            </ContainerCards>
        </ServicesContainer>
    )
}

export default ServicesSection