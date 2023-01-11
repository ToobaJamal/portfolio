import { Link } from "react-router-dom"
import styled from 'styled-components'

const NavbarDiv = styled.div`
    display:none;
    
    @media (min-width: 600px) {
        position: fixed;
        width: 100%;
        height: 4em;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2em;
        border: 1px solid blue;
      }
`

const MobileNavbarDiv = styled.div`
    border: 2px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 90%;
    bottom: 0;
    @media (min-width: 600px) {
        display: none;
      }
`

const Logo = styled.span`
   margin-right: auto;
`

const LogoMobile = styled.span`
   display: block;
   @media (min-width: 600px) {
    display: none;
  }
`


export default function Navbar() {
    return (
        <>
            <NavbarDiv>
                <Logo><Link to="/">Tooba Jamal</Link></Logo>
                <Link to="/about">About</Link>
                <Link to="/hire">Hire me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </NavbarDiv>
            <LogoMobile><Link to="/">Tooba Jamal</Link></LogoMobile>
            <MobileNavbarDiv>
                <Link to="/about">About</Link>
                <Link to="/hire">Hire me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </MobileNavbarDiv>
        </>
    )
}