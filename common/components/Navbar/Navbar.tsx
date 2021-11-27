import styled from "styled-components";
import Link from "next/link";
import { SearchIcon } from "../../styles/icons";

const NavbarWrapper = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    background: ${p => p.theme.backgroundGradient_180_50};
`;

const Content = styled.div`
    margin: 1rem;
`;

const NavbarContainer = styled.div`
    display: flex;
    align-intems : center;
    justify-content: space-between;
    min-height: ${p => p.theme.navigationHeight};
`;

const Logo = styled.div`
    cursor: pointer;
    margin-left: 5rem;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    font-family: 'Outfit';
    font-color: ${p => p.theme.white};

    @media(max-width: 712px) {
        margin-left: 2rem;
    }

    @media(max-width: 458px){
        margin-left: 1rem;
        font-size: 2rem;
    }
`;

const Icon = styled.a`
    width: 30px;
    height: 30px;
    margin-right: 5rem;
    cursor: pointer;
    display: flex;

    @media(max-width: 712px) {
        margin-right: 2rem;
    }

    @media(max-width: 458px){
        margin-right: 1rem;
        font-size: 2rem;
    }
`;

const SVG = styled.svg`
    transition: 0.2s ease-in all;
    &:hover {
        color: red;
    }
`;



const Navbar = () => {
    return(
        <NavbarWrapper>
            <Content>
                <NavbarContainer>
                    <Link href="/" passHref>
                        <Logo>
                            Watch<span style={{color: 'red'}}>.</span>io
                        </Logo>
                    </Link>
                    <Icon href="/search">
                    <SVG xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </SVG>
                    </Icon>
                </NavbarContainer>
                
            </Content>
        </NavbarWrapper>
    )
}

export default Navbar;