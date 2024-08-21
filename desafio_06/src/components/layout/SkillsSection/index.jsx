import { 
    Card, ContainerCards, SkillsContainer, 
    Title, Image } 
from './styles';

import IconHtml from '../../../assets/images/html.svg';
import IconCss from '../../../assets/images/css.svg';
import IconJavascript from '../../../assets/images/javascript.svg';
import IconTailwind from '../../../assets/images/tailwind.svg';
import IconReact from '../../../assets/images/react.svg';
import IconNext from '../../../assets/images/next.svg';

const SkillsSection = () => {
    const iconsTechs = [
        { icon: IconHtml, alt: 'Icon HTML' },
        { icon: IconCss, alt: 'Icon CSS' },
        { icon: IconJavascript, alt: 'Icon JavaScript' },
        { icon: IconTailwind, alt: 'Icon Tailwind' },
        { icon: IconReact, alt: 'Icon React' },
        { icon: IconNext, alt: 'Icon Next' }
    ];

    return (
        <SkillsContainer>
            <Title>Habilidades</Title>
            <ContainerCards>
                {
                    iconsTechs.map(({ icon, alt }) => (
                        <Card key={alt}>
                            <Image src={icon} alt={alt} width='70' />
                        </Card>
                    ))
                }
            </ContainerCards>
        </SkillsContainer>
    )
}

export default SkillsSection