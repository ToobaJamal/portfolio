import { SocialIconContainer, SocialIcon } from "./Contact"
import styled from "styled-components"
export const ContainerDiv = styled.div`
    margin-inline: auto;
    max-width: 1000px;
    margin-block: 1em;
    width: 90%;
    min-height: calc(100vh - 192px);
`

export const Title = styled.h1`
    max-width: 1000px;
    width: 80%;
    text-align: center;
    margin: 0 auto 0.7em;
    padding-top: 60px;
    @media (max-width: 730px) {
        padding-top: 0px;
        font-size: 1.8em;
    }
    @media (max-width: 450px) {
        font-size: 1.5em;
    }
`

export const Desc = styled.div`
    max-width: 1000px;
    margin-inline: auto;
    margin-bottom: 2em;
    width: 80%;
    font-weight: 500;
    @media(max-width: 500px) {
        width: 100%;
        text-align: center;
    }
`

export const Highlight = styled.span`
    color: #DE3163;
`
const Skills = styled.span`
    font-weight: 600;
    font-size: 1.2em;
   `

export default function About() {
    return (
        <>
        <ContainerDiv data-aos="zoom-in" data-aos-duration="1500">
            
            <Title>About me</Title>
            <Desc>Hi, My name is Tooba. Thank you for stopping by.  <br/><br/>
                I hold a master's degree in Data Engineering and have a background in machine learning. I discovered my love for <Highlight>JavaScript </Highlight>
                and <Highlight>web development</Highlight> and started learning it. And now I spend most of my day building interactive web experiences.  
            I have always loved writing and started writing <Highlight>technical articles</Highlight> back in 2021. I got accepted as an author at famous 
            publications including <Highlight>Towards Data Science</Highlight> and <Highlight>FreeCodeCamp</Highlight> and received great feedback from users. 
            They say I make complex topics easy to be understood.  
            I have always enjoyed learning new things as I believe learning is growing. <br/><br/>
            Currently, I am a freelance web developer and technical writer looking for life-changing opportunities. I'd love to help you build a website or technical document that's clear and efficient—one that gets the job done and doesn't get in the way of your business.
            <br/><br/>
            <Skills>Languages:</Skills> JavaScript , HTML5, CSS, Python for machine learning
            <br/><br/>
            <Skills>Frameworks/Libraries:</Skills> React.js, Styled-Components, webpack, npm, babel
            <br/><br/>
            <Skills>Tools:</Skills> Git, GitHub</Desc>
            <SocialIconContainer>
            <a href='https://www.linkedin.com/in/tooba-jamal/' target="_blank"><SocialIcon src='./images/linkedin.png'/></a>
            <a href='https://github.com/ToobaJamal' target="_blank"><SocialIcon src='./images/github.png'/></a>
            <a href='https://www.linkedin.com/in/tooba-jamal/' target="_blank"><SocialIcon src='./images/insta.png'/></a>
            </SocialIconContainer>
        </ContainerDiv>
        </>
    )
}