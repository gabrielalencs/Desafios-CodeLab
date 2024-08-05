import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 4rem 3rem;
    border-bottom: .2rem solid var(--dark-20);
    display: flex;
    justify-content: center;

    @media (width >= 992px) {
        align-items: center;
        justify-content: space-between;
    }
`;

export const HeaderBrand = styled.span`
    font-family: "Fira Code", monospace;
    font-size: 1.9rem;
    color: var(--brand-color);

    @media (width >= 768px) {
        font-size: 2.4rem;
    }
`;

export const HeaderNav = styled.nav`
    display: none;

    @media (width >= 992px) {
        display: block;
    }

`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 5.6rem;
`;

export const NavItem = styled.li`
    font-size: 1.8rem;
    color: var(--white);
`;

export const NavLink = styled.a`
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
        background-color:var(--brand-color);
        transform-origin: 100% 50%;
        transform: scale3d(0, 1, 1);
        transition: transform 0.3s;
    }
`;
