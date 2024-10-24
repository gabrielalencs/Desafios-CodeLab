import styled from "styled-components";

export const GalleryContainer = styled.section`
    margin-top: 15rem;
    padding: 0 3rem;
    margin-bottom: 100rem;

    @media (width >= 1150px) {
        margin-top: 20rem;
    }

    @media (width >= 1200px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10rem;
    }
`;

export const TextContainer = styled.div`
    max-width: 43rem;
    margin: 0 auto;

    @media (width >= 768px) {
        margin: 0;
        max-width: 55rem;
    }

    @media (width >= 768px) {
        margin: 0 auto;
        text-align: center;
    }

    @media (width >= 992px) {
        max-width: 70rem;
    }

    @media (width >= 1200px) {
        margin: 0;
        max-width: 45rem;
        text-align: left;
    }
`;

export const Label = styled.span`
    font-size: 1.5rem;
    color: var(--brand-color);
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 2rem;

    &::before {
        content: '';
        display: block;
        width: 6.5rem;
        height: .1rem;
        background-color: var(--brand-color);
    }

    @media (width >= 992px) {
        justify-content: center;
    }

    @media (width >= 1200px) {
        justify-content: flex-start;
    }
`;

export const Title = styled.h2`
    margin-top: 2rem;
    font-size: 3rem;
    font-weight: 400;

    @media (width > 360px) {
        font-size: 3.5rem;
    }

    @media (width >= 768px) {
        font-size: 4.5rem;
    }

    @media (width >= 992px) {
        font-size: 5rem;
    }

    @media (width >= 1200px) {
        max-width: 45rem;
    }
`;

export const ContainerImages = styled.div`
    margin: 6rem auto 0;
    max-width: 44rem;

    @media (width >= 992px) {
        max-width: 50rem;
    }

    @media (width >= 1200px) {
        margin: 6rem 0 0;
    }

    @media (width >= 1200px) {
        margin: 8rem 0 0;
        max-width: 100%;
    }
`;

export const TitleImages = styled.h3`
    margin-top: 1rem;
    font-size: 2.3rem;
    font-weight: 400;

    @media (width >= 768px) {
        font-size: 2.7rem;
    }

    @media (width >= 1200px) {
        font-size: 3rem;
    }
`;

export const DescriptionImages = styled.p`
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 300;

    @media (width >= 768px) {
        font-size: 1.8rem;
    }

    @media (width >= 1200px) {
        font-size: 1.9rem;
    }
`;