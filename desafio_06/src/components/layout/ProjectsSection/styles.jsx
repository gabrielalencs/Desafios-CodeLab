import styled from "styled-components";

export const ProjectsContainer = styled.section`
    margin-top: 20rem !important;
    padding: 0 3rem;
`;

export const Title = styled.h2`
    font-size: 3rem;
    color: var(--brand-color);
    text-align: center;
`;

export const ContainerCards = styled.div`
    margin-top: 7rem;
    display: grid;
    gap: 5rem;

    @media (width >= 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10rem;
    }
`;