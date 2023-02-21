import { ContainerDiv, Desc, Title, Skills } from './About'
import styled from 'styled-components'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const SocialIconContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    gap: 1em;
    margin-inline: auto;
    @media(max-width: 400px) {
        width: 200px;
        gap: 0.5em;
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

const ContactContainerDiv = styled.div`
margin-inline: auto;
max-width: 1000px;
margin-block: 2em;
width: 90%;

`
export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
    }
    return (
        <>
        <ContactContainerDiv data-aos="zoom-in" data-aos-duration="1500">
            <Title>Let's have a talk</Title>
            <Desc>
                Interested in building great things together? I am here to help you.
                Please send me an email at <Skills>tj.toobajamal@gmail.com</Skills>
            </Desc>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            <Desc>
                I know you like trusty friends and I love making new ones. Hit me up on your favorite social platform ⤵️
            </Desc>
            <SocialIconContainer>
            <a href='https://www.linkedin.com/in/tooba-jamal/' target="_blank"><SocialIcon src='./images/linkedin.png'/></a>
            <a href='https://github.com/ToobaJamal' target="_blank"><SocialIcon src='./images/github.png'/></a>
            <a href='https://www.linkedin.com/in/tooba-jamal/' target="_blank"><SocialIcon src='./images/insta.png'/></a>
            <a href='https://twitter.com/codingmysoul' target="_blank"><SocialIcon src='./images/twitter.png'/></a>
            </SocialIconContainer>
        </ContactContainerDiv>
        
        </>
    )
}