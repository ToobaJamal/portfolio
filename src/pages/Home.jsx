import AboutMeShort from "../components/AboutMeShort"
import WhyMe from "../components/WhyMe"
import Testimonials from "../components/Testimonials"
import styled from 'styled-components'

const IntroSection = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IntroTitle = styled.h1`
    text-decoration-line: underline;
    
`

const IntroDesc = styled.p`
    text-decoration-line: underline;
`
export default function Home() {
    return (
        <>
            <IntroSection>
                <IntroTitle>Hi, I am Tooba</IntroTitle>
                <IntroDesc>I am a freelance front-end web developer and technical writer</IntroDesc>
            </IntroSection>
            <AboutMeShort />
            <WhyMe />
            <Testimonials />
        </>
    )
}