import styled from "styled-components";

export const AboutContainer = styled.section`
    margin-top: 6rem !important;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
`;

export const ContainerTexts = styled.div`
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 3rem;
    color: var(--brand-color);
`

export const Description = styled.p`
    margin-top: 2rem;
    font-size: 1.5rem;
    color: var(--white);
    line-height: 3.8rem;

    @media (width >= 768px) {
        font-size: 2rem;
    }
`

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 7rem;
    flex-wrap: wrap;
    color: white;

    @media (width >= 992px) {
        gap: 10rem;
    }
`

export const ContainerIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`

export const Icon = styled.div`
    width: 5.2rem;
    height: 5.2rem;
    border: 1px solid var(--dark-30);
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: all .3s;

    &:hover {
        border: 1px solid var(--brand-color);
    }
`

export const TitleIcon = styled.span`
    font-size: 1.8rem;
    font-weight: 500;

    @media (width >= 768px) {
        font-size: 2rem;
    }
`

export const ContentIcon = styled.span`
    font-size: 1.6rem;
    font-weight: 400;

    @media (width >= 768px) {
        font-size: 1.8rem;
    }
`