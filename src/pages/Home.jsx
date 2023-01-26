import WhyMe from "../components/WhyMe"
import Testimonials from "../components/Testimonials"
import Portfolio from "../components/Portfolio"
import styled, {keyframes} from 'styled-components'

const IntroSection = styled.div`
height: 100vh;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 50vw;
padding-top: 56px;
padding-inline: 2em;
margin-inline: auto;

@media (max-width: 802px) {
    width: 70%;
}
@media(max-width: 730px) {
    padding: 0;
    height: calc(100vh - 88.781px);
}
@media (max-width: 600px) {
    width: 90%;
}
`
const IntroTitleText = styled.p`  
    margin: 0;
    font-size: 1.3em;
    font-weight: 500;
    width: 100%;
    text-align: left;

    @media(max-width: 440px) {
        font-size: 1.3em;
    }
`

const IntroTitle = styled.h1`
    color: #DE3163;
    text-align: left;
    margin: 0; 
    padding: 0;

    @media(max-width: 500px) {
        font-size: 3em;
    }
    @media(max-width: 440px) {
        font-size: 2em;
    }
`

const IntroDesc = styled.p`
    margin: 0;
    font-size: 1.3em;
    font-weight: 500;
    width: 100%;
    text-align: left;

    @media(max-width: 440px) {
        font-size: 1em;
    }
`
export default function Home() {
    
    return (
        <>
            <IntroSection data-aos="flip-right">
                <IntroTitleText>Hi, My name is</IntroTitleText>
                <IntroTitle>Tooba Jamal</IntroTitle>
                <IntroDesc>I am a front-end web developer and a technical writer</IntroDesc>
            </IntroSection>
            <WhyMe/>
            <Portfolio/>
            <Testimonials/>
        </>
    )
}