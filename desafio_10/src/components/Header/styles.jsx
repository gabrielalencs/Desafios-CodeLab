import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: 5rem 0;

    @media (width >= 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 3rem 4rem;
    }
`;

export const HeaderLogo = styled.img`
    width: 18rem;

    @media (width >= 768px) {
        width: 20rem;
    }
`;

export const HeaderNav = styled.nav`
    @media (width >= 768px) {
        display: flex;
        align-items: center;
        gap: 5rem;
    }
`;

export const HeaderList = styled.ul`
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (width >= 768px) {
        gap: 5rem;
    }
`;

export const HeaderItem = styled.li`
    font-size: 1.8rem;
    color: var(--dark);
    transition: color .3s;
    position: relative;

    &:hover {
        color: var(--brand-color);
    }

    &:hover::before {
        transform-origin: 0% 50%;
        transform: scale3d(1, 1, 1);
    }

    &::before {
        content: '';
        position: absolute;
        bottom: -7px;
        height: 2px;
        width: 100%;
        background-color: var(--brand-color);
        transform-origin: 100% 50%;
        transform: scale3d(0, 1, 1);
        transition: transform 0.3s;
    }

    @media (width >= 768px) {
        font-size: 1.9rem;
    }
`;

export const HeaderButton = styled.button`
    background-color: var(--brand-color);
    color: var(--white);
    font-size: 1.8rem;
    padding: 1rem 3rem;
    font-weight: 500;
    display: none;
    transition: all .3s;
    border: .2rem solid var(--brand-color);

    &:hover {
        background-color: transparent;
        color: var(--brand-color);
    }

    @media (width >= 768px) {
        display: block;
        margin: 2rem auto;
    }
`;