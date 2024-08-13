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

export const Content = styled.div``

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

export const Button = styled.button`
    margin-top: 3rem;
    padding: 1rem 4rem;
    border-radius: .4rem;
    background-color: var(--brand-color);
    color: var(--dark-10);
    border: 2px solid var(--brand-color);
    transition: all .3s;

    &:hover {
        background-color: transparent;
        color: var(--brand-color);
    }
`

export const ContainerImage = styled.div``;

export const Image = styled.img`
    width: 100%;
`;