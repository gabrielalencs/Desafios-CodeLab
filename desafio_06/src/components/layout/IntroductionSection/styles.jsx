import styled from "styled-components";

export const IntroductionContainer = styled.section`
    margin-top: 6rem !important;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;

    @media (width >= 992px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Content = styled.div`
    @media (width >= 480px) {
        text-align: center;
    }

    @media (width >= 992px) {
        text-align: left;
    }
`

export const Title = styled.h1`
    font-size: 2.4rem;
    color: var(--white);

    @media (width >= 992px) {
        font-size: 3.5rem;
    }
`

export const TitleName = styled.span`
    margin-top: 1.5rem;
    display: block;
    font-size: 4.8rem;
    color: var(--brand-color);

    @media (width >= 992px) {
        font-size: 7rem;
    }
`

export const Profession = styled.p`
    margin-top: 1.5rem;
    font-size: 1.7rem;
    line-height: 2.6rem;
    color: var(--white);

    @media (width >= 992px) {
        font-size: 2rem;
    }
`

export const ContainerImage = styled.div`
    text-align: center;

    @media (width >= 992px) {
        text-align: left;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
`;