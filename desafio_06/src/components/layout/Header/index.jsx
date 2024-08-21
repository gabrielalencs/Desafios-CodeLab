import { 
    HeaderContainer, HeaderBrand, HeaderNav, 
    NavList, NavItem, NavLink 
} from './styles';

const Header = () => {
    return (
        <HeaderContainer className='container'>
            <div>
                <HeaderBrand>&lt; Iuri Silva /&gt;</HeaderBrand>
            </div>

            <HeaderNav>
                <NavList>
                    <NavItem>
                        <NavLink href='#introduction'>Início</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#about'>Sobre Mim</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#projects'>Projetos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#services'>Serviços</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#skills'>Habilidades</NavLink>
                    </NavItem>
                </NavList>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header