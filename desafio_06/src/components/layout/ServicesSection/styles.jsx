import styled from "styled-components";

export const ServicesContainer = styled.section`
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
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    @media (width >= 992px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Card = styled.div`
    background-color: var(--dark-20);
    padding: 3rem;
    border-bottom: 3px solid var(--brand-color);
    flex: 1;

    @media (width >= 480px) {
        text-align: center;
    }

    @media (width >= 992px) {
        text-align: left;
    }
`;

export const CardTitle = styled.h3`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 3rem;
    line-height: 3.4rem;

    @media (width >= 768px) {
        font-size: 2.9rem;
    }
`;