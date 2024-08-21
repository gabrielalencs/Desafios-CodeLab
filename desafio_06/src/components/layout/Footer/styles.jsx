import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-top: 10rem !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 3rem; */
    color: #fff;
`;

export const TextCopyright = styled.p`
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 21.7rem;

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