import { Link } from "react-router-dom"
import styled from 'styled-components'

const FooterDiv = styled.div`
    border: 2px solid red;
    display: flex;
    justify-content: center;
    gap: 15em;
    padding-bottom: 1em;
    margin-bottom: 0.5em;
`

const Title = styled.h3`
    color: #CCDDEE;
`

const Text = styled.span`
    color: #CCDDEE;
`

const Copyright = styled.div`
    color: #CCDDEE;
`

const Explore = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px dotted green;
    margin-left: 3em;
    `
const GetInTouch = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px dotted green;
    margin-right: 3em;
`

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <>
        <FooterDiv>
            <Explore>
                <Title>Explore</Title>
                <Link to="/about"><Text>About</Text></Link>
                <Link to="/hire"><Text>Hire me</Text></Link>
                <Link to="/projects"><Text>Portfolio</Text></Link>
            </Explore>
            <GetInTouch>
                <Title>Get in touch</Title>
                <Link to="/contact"><Text>Contact</Text></Link>
                <Text>LinkedIn</Text>
                <Text>Instagram</Text>
                <Text>Discord</Text>
            </GetInTouch>
        </FooterDiv>
        <Copyright>© {year} Tooba Jamal - All right Reserved.</Copyright>
        </>
    )
}