import styled from 'styled-components'
import { Title } from '../pages/About'
const WhyMeSection = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding-block: 1em;
`

// const Title = styled.h1`
//     margin-bottom: 0.8em;
// `
const ServiceContainer = styled.div`
    width: 400px;
`

const Services = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: center;
   justify-content: center;
   gap: 1em;
   padding: 1em;
   max-width: 1000px;
   min-width: 0;
   margin-top: 2em;
   @media (max-width: 800px) {
    width: 90%;
    gap: 0.6em;
   }
`

const ServiceTitle = styled.p`
    font-size: 1.3em;
    font-weight: 600;
    margin: 0;
`

const ServiceDesc = styled.p`
    font-size: 1em;
    font-weight: 500;
    margin: 0;
    padding: 1em;
    @media (max-width: 400px) {
        
       }
`

export default function WhyMe() {
    return (
        <>
            <WhyMeSection>
                <Title>Why hire me?</Title>
                <Services>
                    <ServiceContainer>
                        <ServiceTitle>Web Development</ServiceTitle>
                        <ServiceDesc>Turn your idea into a user-friendly website.</ServiceDesc>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Technical Writing</ServiceTitle>
                        <ServiceDesc>Make complicated topics easy for audience to understand for your blog/ business</ServiceDesc>
                    </ServiceContainer>
                    <ServiceContainer>
                        <ServiceTitle>Code Refactoring</ServiceTitle>
                        <ServiceDesc>Refactor your ugly lookin website into a modern one or kill bugs in your code</ServiceDesc>
                    </ServiceContainer>
                </Services>
            </WhyMeSection>
        </>
    )
}