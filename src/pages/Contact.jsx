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

const ContactContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: auto;
    max-width: 600px;
    margin-block: 2em;
    width: 90%;
`

const Form = styled.form`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`
const NameEmail = styled.input.attrs({ type: 'text' })`
    &[type="text"],
    &[type="email"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 2.5px solid #ccc;
    border-radius: 4px;
    resize: none;
    outline: none;
    background-color: #FAF9F6;
    margin-bottom: 1em;
  }
`

const Textarea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 10px;
    font-size: 16px;
    border: 2.5px solid #ccc;
    border-radius: 4px;
    resize: none;
    outline: none;
    background-color: #FAF9F6;
    margin-bottom: 1em;
    `

const Submit = styled.input.attrs({ type: 'submit' })`
    align-self: center;
    cursor: pointer;
    padding: 1em;
    color: #FFF5EE;
    background-color: #DE3163;
    border: none;
    outline: none;
    font-size: 1.1em;
    font-weight: 600;
    letter-spacing: 0.7px;
    padding-inline: 1em;
    padding-block: 0.6em;
    border-radius: 10px;
    margin-bottom: 0.7em;
    &:hover{
        background-color: #cf2359;
        color: #FFF5EE;
        }
        @media(max-width: 620px) {
            font-size:1em;
        }
        @media(max-width: 400px) {
            font-size: 0.8em;
        }
`
const Label = styled.label`
    font-weight: 600;
    font-size: 1.1rem;
    @media(max-width: 620px) {
        font-size:1rem;
    }
    @media(max-width: 400px) {
        font-size: 0.8rem;
    }
`
export default function Contact() {
    console.log(import.meta.env.VITE_REACT_YOUR_SERVICE_ID)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_REACT_YOUR_SERVICE_ID, 
            import.meta.env.VITE_REACT_YOUR_TEMPLATE_ID, form.current, 
            import.meta.env.VITE_REACT_YOUR_PUBLIC_KEY)
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
                Please send me a message and I'll get back to you ASAP
            </Desc>
            <Form ref={form} onSubmit={sendEmail}>
                <Label>Name</Label>
                <NameEmail type="text" name="user_name" />
                <Label>Email</Label>
                <NameEmail type="email" name="user_email" />
                <Label>Message</Label>
                <Textarea name="message" rows="4" cols="50"/>
                <Submit type="submit" value="Send" />
            </Form>
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