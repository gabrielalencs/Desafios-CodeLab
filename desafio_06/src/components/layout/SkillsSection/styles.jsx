import styled from "styled-components";

export const SkillsContainer = styled.section`
    margin-top: 15rem !important;
    padding: 0 3rem;

    @media (width >= 992px) {
        margin-top: 20rem !important;
    }
`; 

export const Title = styled.h2`
    font-size: 3rem;
    color: var(--brand-color);
    text-align: center;
`;

export const ContainerCards = styled.div`
    margin-top: 7rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    @media (width >= 1168px) {
        justify-content: space-between;
    }
`;

export const Card = styled.div`
    padding: 3.5rem 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-20);
    border: 1px solid var(--dark-30);
`;

export const Image = styled.img`
    width: 50;

    @media (width >= 768px) {
        width: 70px;
    }
`;