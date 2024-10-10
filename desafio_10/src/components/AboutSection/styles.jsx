import styled from "styled-components";

export const AboutContainer = styled.section`
    margin-top: 15rem;
    padding: 0 3rem;
    margin-bottom: 100rem;

    @media (width >= 1200px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 7rem;
    }
`;

export const ContentContainer = styled.div`
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
        max-width: 60rem;
    }

    @media (width >= 1200px) {
        max-width: 100%;
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

    @media (width >= 768px) {
        justify-content: center;
    }

    @media (width >= 1200px) {
        justify-content: start;
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

export const Description = styled.p`
    margin-top: 2rem;
    font-size: 1.5rem;
    line-height: 3rem;
    font-weight: 300;

    @media (width > 360px) {
        font-size: 1.6rem;
    }

    @media (width >= 768px) {
        font-size: 1.8rem;
    }

    @media (width >= 992px) {
        font-size: 2.1rem;
        line-height: 3.5rem;
    }
`;

export const ImagesContainer = styled.div`
    display: none;

    @media (width >= 1200px) {
        display: flex;
        gap: 2rem;

        img {
            width: 25rem;
            height: 45rem;

            &:nth-child(2) {
                position: relative;
                top: 8rem;
            }
        }
    }
`;
