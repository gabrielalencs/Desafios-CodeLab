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
    font-size: 2rem;
    color: var(--white);
    line-height: 3.8rem;
`

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10rem;
    flex-wrap: wrap;
`

export const ContainerIcon = styled.div`
    text-align: center;
`

export const Icon = styled.div`
    width: 6.2rem;
    height: 6.2rem;
    border: 1px solid var(--dark-30);
    border-radius: 50%;
    display: grid;
    place-items: center;
`

export const TitleIcon = styled.span`
    font-size: 2rem;
    font-weight: 500;
`

export const ContentIcon = styled.span`
    font-size: 1%.8;
    font-weight: 400;
`