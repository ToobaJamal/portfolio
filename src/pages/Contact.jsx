import { ContainerDiv, Desc, Title } from './About'
import styled from 'styled-components'

export const SocialIconContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    gap: 1em;
    margin-inline: auto;
    @media(max-width: 400px) {
        width: 200px;
    }
 `

export const SocialIcon = styled.img`
    width: 40px;
    height: 40px;
    &:hover,
&:focus {
    width: 50px;
    height: 50px;
}
`
// const ContactDesc = styled(Desc)`
//     margin-bottom: 3em;
// `

export default function Contact() {
    return (
        <>
        <ContainerDiv>
            <Title>Let's have a talk</Title>
            <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Desc>
            <SocialIconContainer>
            <a href='https://www.linkedin.com/in/tooba-jamal/' target="_blank"><SocialIcon src='./images/linkedin.png'/></a>
            <a href='https://github.com/ToobaJamal' target="_blank"><SocialIcon src='./images/github.png'/></a>
            <a href='https://www.linkedin.com/in/tooba-jamal/' target="_blank"><SocialIcon src='./images/insta.png'/></a>
            </SocialIconContainer>
        </ContainerDiv>
        
        </>
    )
}