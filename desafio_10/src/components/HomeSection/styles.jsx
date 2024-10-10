import styled from "styled-components";

export const HomeContainer = styled.section`
    margin-top: 3rem;
    padding: 0 3rem;

    @media (width >= 768px) {
        margin-top: 5rem;
    }
`;

export const ContentContainer = styled.div`
    text-align: center;
`;

export const MainTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 500;
    max-width: 38rem;
    margin: 0 auto;

    @media (width > 360px) {
        font-size: 4rem;
    }

    @media (width >= 768px) {
        font-size: 5rem;
        max-width: 100%;
    }

    @media (width >= 992px) {
        font-size: 6rem;
    }

    span {
        font-style: italic;
    }
`;

export const Description = styled.p`
    margin-top: 2rem;
    font-size: 1.5rem;
    line-height: 3rem;
    font-weight: 300;
    max-width: 50rem;
    margin: 2rem auto 0;

    @media (width > 360px) {
        font-size: 1.6rem;
    }

    @media (width >= 768px) {
        font-size: 1.8rem;
        max-width: 60rem;
    }

    @media (width >= 992px) {
        font-size: 2.3rem;
        max-width: 70rem;
        line-height: 3.5rem;
    }
`;

export const ImagesContainer = styled.div`
    display: none;

    @media (width >= 992px) {
        display: flex;
        justify-content: center;
        gap: 3rem;
        margin-top: 10rem;
        width: 100%;
    }

    @media (width >= 1150px) {
        justify-content: space-between;
    }

    img {
        max-width: 25rem;
        width: 100%;
        height: 50rem;

        &:nth-child(2) {
            position: relative;
            bottom: 1.8rem;
        }

        &:last-child {
            display: none;

            @media (width >= 1150px) {
                position: relative;
                bottom: 1.8rem;
                display: block;
            }
        }
    }
`;