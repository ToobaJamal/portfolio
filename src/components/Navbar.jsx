import { Link } from "react-router-dom"
import styled from 'styled-components'

const NavbarDiv = styled.div`
    display:none;

    @media (min-width: 730px) {
        z-index: 1;
        box-shadow: 0 8px 6px -6px #C0C0C0;
        background-color: #FFFFFF;
        position: fixed;
        top:0;
        width: 100%;
        padding-block: 1em;
        padding-inline: 2.3em;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2em;
      }
`

const MobileNavbarDiv = styled.div`
 
    box-shadow: 0 -8px 8px -6px #C0C0C0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    z-index:100;
    position: fixed;
    width: 100%;
    padding-block: 0.6em;
    padding-inline: 2em;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 730px) {
        display: none;
      }
    @media (max-width: 730px) {
        padding-inline: 3em;
      }
    @media (max-width: 600px) {
        padding-inline: 2em;
      }
    @media (max-width: 500px) {
        padding-inline: 1.5em;
      }
    @media (max-width: 390px) {
        padding-inline: 1em;
      }
    @media (max-width: 350px) {
        padding-inline: 0.7em;
      }
    
`

const Logo = styled(Link)`
    color: #303537;
    font-size: 1.25em;
    font-weight: 600;
    &:hover {
    color: #303537;
    text-decoration: none;
    }
    margin-right: auto; 
`
const DividerLine = styled.div`
    padding-block: 0.8em;
    border: none;
    border-right: 1px solid #696969;
    background-color: #696969;S
`

export const NavbarLink = styled(Link) `
    color: #303537;
    font-size: 1.25em;
    font-weight: 600;
    &:hover,
    &: focus {
        color: #DE3163;
      }
`
export const MobileNavbarLink = styled(Link) `
    color: #303537;
    font-size: 1em;
    font-weight: 500;
    &:hover,
    &: focus {
        color: #DE3163;
      }
`

const LogoMobile = styled(Link)`
    box-shadow: 0 8px 6px -6px #C0C0C0;
    z-index: 100;
    background-color: #FFFFFF;
    color: #303537;
    font-size: 1.25em;
    display: block;
    width: 100%;
    position: fixed;
    padding-block: 0.5em;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-weight: 600;
    &:hover {
    color: #303537;
    text-decoration: none;
    }
    margin-right: auto;
    @media (min-width:730px) {
     display: none;
  }
`



export default function Navbar() {
    return (
        <>
            <NavbarDiv>
                <Logo to="/">Tooba Jamal</Logo>
                <NavbarLink to="/about">About</NavbarLink>
                <NavbarLink to="/hire">Hire me</NavbarLink>
                <NavbarLink to="/projects">Projects</NavbarLink>
                <NavbarLink to="/contact">Contact</NavbarLink>
            </NavbarDiv>
            <LogoMobile to="/">Tooba Jamal</LogoMobile>
            <MobileNavbarDiv>
                <MobileNavbarLink to="/about">About</MobileNavbarLink>
                <DividerLine />
                <MobileNavbarLink to="/hire">Hire me</MobileNavbarLink>
                <DividerLine />
                <MobileNavbarLink to="/projects">Projects</MobileNavbarLink>
                <DividerLine />
                <MobileNavbarLink to="/contact">Contact</MobileNavbarLink>
            </MobileNavbarDiv>
        </>
    )
}