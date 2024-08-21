import { ProjectsContainer, Title, ContainerCards } from "./styles";

import CardProject from "../../CardProject";


const ProjectsSection = () => {
    return (
        <ProjectsContainer>
            <Title>Projetos</Title>

            <ContainerCards>
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </ContainerCards>
        </ProjectsContainer>
    )
}

export default ProjectsSection