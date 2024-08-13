import React from 'react'

import { 
    HeaderContainer, HeaderBrand, HeaderNav, 
    NavList, NavItem, NavLink 
} from './styles'


const Header = () => {
    return (
        <HeaderContainer className='container'>
            <div>
                <HeaderBrand>&lt; Iuri Silva /&gt;</HeaderBrand>
            </div>

            <HeaderNav>
                <NavList>
                    <NavItem>
                        <NavLink>Início</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink>Sobre Mim</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink>Projetos</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink>Serviços</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink>Habilidades</NavLink>
                    </NavItem>
                </NavList>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header