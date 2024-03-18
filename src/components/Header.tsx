import styled from "styled-components"
import logo from "../assets/logo.svg"

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #020203;
    width: 100%;
    height: 91px;
    box-shadow: 0 4px 4px 0 #00000040;
    padding: 0 29px;
    z-index: 2;
`

const NavigationList = styled.ul`
    display: flex;
    align-items: center;
    gap: 110px;
`
const NavigationLink = styled.li`
    a {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0;
        color: #FFFFFF;
        text-align: left;

        &:hover {
            text-decoration: underline;
        }
    }
`

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={logo} className="logo" alt="Vite logo"/>
            <nav>
                <NavigationList>
                    <NavigationLink>
                        <a href="#">Accueil</a>
                    </NavigationLink>
                    <NavigationLink>
                        <a href="#">Profil</a>
                    </NavigationLink>
                    <NavigationLink>
                        <a href="#">Réglage</a>
                    </NavigationLink>
                    <NavigationLink>
                        <a href="#">Communauté</a>
                    </NavigationLink>
                </NavigationList>
            </nav>
        </HeaderWrapper>
    )
}

export default Header