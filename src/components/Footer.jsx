import { Link } from "react-router-dom"
import styled from 'styled-components'

const FooterDivParent = styled.div`
    
    width: 100%;
`

const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 15em;
    background-color: #303537;
    padding: 0.7em;
    margin-bottom: 0;
    width: 100%;
    @media (max-width: 580px) {
        gap: 8em;
    }
    @media (max-width: 450px) {
        gap: 5em;
    }
    @media (max-width: 385px) {
        gap: 2em;
    }
`

const Title = styled.h3`
background-color: inherit;
    color: #FFFFFF;
    margin: 0.5em 0 0.3em 0;
    font-weight: 500;
    padding: 0;
    @media (max-width: 580px) {
        font-size: 1em;
    }
    @media (max-width: 330px) {
        font-size: 0.9em;
    }
`

const Text = styled.span`
    color: #FFFFFF;
    margin: 0;
    background-color: inherit;
    font-size: 0.9em;
    font-weight: 400;
    @media (max-width: 580px) {
        font-size: 0.7em;
    }
`

const Copyright = styled.div`
    background-color: #303537;
    color: #FFFFFF;
    text-align: center;
    font-size: 0.9em;
    padding: 0.5em;
    margin-bottom: 0;
    @media (max-width: 480px) {
        font-size: 0.7em;
    }
`

const Explore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3em;
    margin-left: 3em;
    background-color: inherit;
    `
const GetInTouch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3em;
    margin-right: 3em;
    background-color: inherit;
`

const FooterLink = styled(Link)`
    background-color: inherit;
`
const FooterLinkSocial = styled.a`
    background-color: inherit;
`

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <>
        <FooterDivParent>
            <FooterDiv>
                <Explore>
                    <Title>Explore</Title>
                    <FooterLink to="/about"><Text>About</Text></FooterLink>
                    <FooterLink to="/hire"><Text>Hire me</Text></FooterLink>
                    <FooterLink to="/projects"><Text>Portfolio</Text></FooterLink>
                </Explore>
                <GetInTouch>
                    <Title>Get in touch</Title>
                    <FooterLink to="/contact"><Text>Contact</Text></FooterLink>
                    <FooterLinkSocial href='https://www.linkedin.com/in/tooba-jamal/'><Text>LinkedIn</Text></FooterLinkSocial>
                    <FooterLinkSocial href='https://www.instagram.com/codingmysoul/'><Text>Instagram</Text></FooterLinkSocial>
                    <FooterLinkSocial href="https://twitter.com/codingmysoul"><Text>Twitter</Text></FooterLinkSocial>
                </GetInTouch>
            </FooterDiv>
            <Copyright>© {year} Tooba Jamal - All right Reserved.</Copyright>
        </FooterDivParent>
        </>
    )
}
