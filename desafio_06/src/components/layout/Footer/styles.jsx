import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-top: 20rem !important;
    color: #fff;
    background-color:  var(--dark-20);
`;

export const FooterLimit = styled.div`
    padding: 7rem 3rem;
   
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    @media (width >= 768px) {
        display: flex;
        flex-direction: row;
        gap: 0;
        justify-content: space-between;
    }
`;

export const TextCopyright = styled.p`
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 2.1rem;

    @media (width >= 768px) {
        font-size: 2rem;
    }
`;

export const ContainerPowered = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const TextPowered = styled(TextCopyright).attrs({ as: 'span' })``;

export const Credits = styled.p`
    font-size: 1.7rem;
    text-align: center;
    margin-top: 10rem;

    br {
        display: none;
    }
`;

export const CreditsLink = styled.a`
    color: var(--brand-color);
    transition: all .3s;

    &:active, 
    &:hover {
        color: #518a65;
    }
`;