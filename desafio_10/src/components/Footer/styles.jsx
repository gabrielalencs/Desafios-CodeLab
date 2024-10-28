import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin: 15rem 3rem 0 !important;
    padding: 8rem 3rem;
    border-top: 2px solid #D9D9D6;

    @media (width >= 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (width >= 1216px) {
        margin: 15rem auto 0 !important;
    }

    @media (width >= 1150px) {
        margin-top: 20rem !important;
    }
`;

export const CopyHomeYou = styled.span`
    font-size: 1.8rem;

    span {
        color: var(--brand-color);
    }
`;

export const Label = styled.span`
    font-size: 1.5rem;
    color: #2C2C2C;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 2rem;

    &::after {
        content: '';
        display: block;
        width: 6.5rem;
        height: .1rem;
        background-color: #2C2C2C;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 5rem;

    @media (width >= 768px) {
        margin-top: 0;
        flex-direction: row;
        gap: 4rem;
    }
`;

export const Icon = styled.img`
    width: 3rem;
    height: 3rem;

    @media (width >= 768px) {
        width: 4rem;
        height: 4rem;
    }
`;

export const SocialMediaList = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
`;
