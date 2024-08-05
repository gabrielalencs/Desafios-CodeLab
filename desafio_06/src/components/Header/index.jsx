import React from 'react'

import { HeaderContainer, HeaderBrand, HeaderNav, NavList, NavItem, NavLink } from './styles'


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

            {/* <div>
                <label className="bar" htmlFor="check">
                    <input type="checkbox" id="check" />
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                </label>
            </div> */}
        </HeaderContainer>
    )
}

export default Header