import styled from 'styled-components'

const WhyMeSection = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding-block: 1em;
    min-height: 0;
    margin-inline: auto;

    @media(max-width: 400px) {
        padding-inline: 1em;
        margin-inline: 0;
    }
`

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 0.5em;
    @media (max-width: 450px) {
        font-size: 1.8em;
    }
`

const ServiceContainer = styled.div`
    width: 400px;
    height: 150px;
    background-color:#FAF9F6;
  
    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 1em;
    @media(max-width: 500px) {
        width: 80%;
        height: auto;
    }
`

const Services = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: center;
   justify-content: center;
   gap: 1.4em;
   padding: 1em;
   max-width: 1000px;
   min-width: 0;
   min-height: 0;
`

const ServiceTitle = styled.p`
    background-color: #FFFFF0;
    font-size: 1.3em;
    font-weight: 600;
    margin: 0;
    @media (max-width: 450px) {
        font-size: 1em;
    }
`

const ServiceDesc = styled.p`
background-color: #FFFFF0;
    font-size: 1em;
    font-weight: 500;
    margin: 0;
    padding: 1em;
    @media (max-width: 450px) {
        font-size: 0.9em;
    }
    @media (max-width: 400px) {
        width: 100%;
        margin-inline: auto;
       }
`


export default function WhyMe() {
    return (
        <>
            <WhyMeSection>
                <Title data-aos="flip-right">Why hire me?</Title>
                <Services >
                    <ServiceContainer data-aos="zoom-in">
                        <ServiceTitle>Web Development</ServiceTitle>
                        <ServiceDesc>Turn your idea into a user-friendly website</ServiceDesc>
                    </ServiceContainer>
                    <ServiceContainer data-aos="zoom-in">
                        <ServiceTitle>Technical Writing</ServiceTitle>
                        <ServiceDesc>Make complicated topics easy for audience to understand for your blog/ business</ServiceDesc>
                    </ServiceContainer>
                    <ServiceContainer data-aos="zoom-in">
                        <ServiceTitle>Code Refactoring</ServiceTitle>
                        <ServiceDesc>Refactor your ugly lookin website into a modern one or kill bugs in your code</ServiceDesc>
                    </ServiceContainer>
                </Services>
            </WhyMeSection>
        </>
    )
}