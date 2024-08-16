import styled from "styled-components";

export const Card = styled.div``;

export const ProjectImage = styled.div`
    background-color: var(--dark-20);
    border: 2px solid var(--dark-30);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9rem 0;
`;

export const ImageText = styled.span`
    font-size: 2rem;
    color: var(--brand-color);

    @media (width >= 768px) {
        font-size: 2.4rem;
    }
`;

export const ProjectName = styled.h3`
    margin-top: 3rem;
    font-size: 2rem;
    color: #fff;

    @media (width >= 768px) {
        font-size: 2.4rem;
    }
`;

export const Technologies = styled.span`
    display: inline-block;
    margin-top: 2rem;
    font-size: 1.8rem;
    color: var(--brand-color);
`;

export const ContainerButtons = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media (width >= 768px) {
        flex-direction: row;
    }
`;