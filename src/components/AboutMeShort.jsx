import styled from 'styled-components'

const AboutSection = styled.div`
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

const Desc = styled.p`
    color: red;
`

export default function AboutMeShort() {
    return (
        <>
        <AboutSection>
            <Title>About Me</Title>
            <Desc>My name is Tooba. I build websites and break complex technical information into easy to understand sentences.</Desc>
        </AboutSection>
        </>
    )
}