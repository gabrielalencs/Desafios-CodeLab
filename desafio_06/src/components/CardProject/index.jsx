
import { 
    Card, ContainerButtons, ImageText,
    ProjectImage, ProjectName, Technologies 
} from "./styles";

import Button from "../Button";

const CardProject = () => {
    return (
        <Card>
            <ProjectImage>
                <ImageText>
                    Imagem projeto
                </ImageText>
            </ProjectImage>
            <ProjectName>Nome do projeto</ProjectName>
            <Technologies>Tecnologias usadas no projeto</Technologies>
            <ContainerButtons>
                <Button
                    text='Acessar o projeto'
                />
                <Button
                    text='Acessar repositório'
                    bgColor='transparent'
                    textColor='var(--brand-color)'
                />
            </ContainerButtons>
        </Card>
    )
}

export default CardProject