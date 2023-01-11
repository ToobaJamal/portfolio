import styled from 'styled-components'

const WhyMeSection = styled.div`
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: red;
`

const Values = styled.div`
   border: 1px solid yellow;
`

const Services = styled.div`
   border: 1px solid yellow;
`

export default function WhyMe() {
    return (
        <>
            <WhyMeSection>
                <Title>Why hire me?</Title>
                <Values>
                    <p>Collaboration</p>
                    <p>Quality</p>
                </Values>
                <Services>
                    <p>Web Development</p>
                    <p>Technical Writing</p>
                    <p>Code Refactoring</p>
                </Services>
            </WhyMeSection>
        </>
    )
}