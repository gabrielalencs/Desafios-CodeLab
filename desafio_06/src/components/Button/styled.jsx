import styled from "styled-components";

export const ButtonElement = styled.button`
    padding: 1rem 4rem;
    border-radius: .4rem;
    background-color: ${(props) => props.$bgColor || 'var(--brand-color)'};
    color: ${(props) => props.$textColor || 'var(--dark-10)'};
    border: 2px solid var(--brand-color);
    transition: all .3s;
    margin-top: ${(props) => props.$marginTop || '0px'};
    cursor: pointer;

    &:hover {
        background-color: transparent;
        color: var(--brand-color);
    }
`;

export default ButtonElement;