import styled from 'styled-components'
import { ContainerDiv, Desc, Title, Highlight } from './About'
import { SocialIcon, SocialIconContainer } from './Contact'

export default function Hire() {
    return (
        <>
            <ContainerDiv data-aos="zoom-in">
            <Title>Web Developer and Technical Writer</Title>
            <Desc>I'm a web developer and technical writer with a background in machine learning. 
                I, specialize in <Highlight>front-end development</Highlight> with strong <Highlight>JavaScript</Highlight> and 
                <Highlight>React</Highlight> skills. 
                I also love writing and combined my writing skills in tech I became a <Highlight>technical writer</Highlight>.
                I'm also an experienced machine learning engineer who has worked on projects in Python, 
                Jupyter Notebooks, and Git. My toolkit includes <Highlight>HTML, CSS, JavaScript, React, Machine Learning, 
                Python for Machine Learning, Jupyter Notebooks and Git</Highlight>—but what matters most is what you need from 
                me as your web developer. Whether it's building your website or technical document or writing an email 
                or blog post that gets the job done but doesn't get in the way of your business (and doesn't use jargon or confuse anyone), 
                I'll help make sure it's cleanly written so everyone can understand it easily.
                I love what I do, and building websites that provide better user experience is my passion. 
                I've written technical articles for famous publications including <Highlight>FreeCodeCamp</Highlight> and 
                <Highlight>Towards Data Science</Highlight>. 
                My content is known for being easy to understand no matter how complicated the topic is.
                Currently looking for life-changing opportunities. Get in touch if you have got any!</Desc>
                <SocialIconContainer>
            <a href='https://www.linkedin.com/in/tooba-jamal/' target="_blank"><SocialIcon src='./images/linkedin.png'/></a>
            <a href='https://github.com/ToobaJamal' target="_blank"><SocialIcon src='./images/github.png'/></a>
            <a href='https://www.linkedin.com/in/tooba-jamal/' target="_blank"><SocialIcon src='./images/insta.png'/></a>
            </SocialIconContainer>
            </ContainerDiv>
        </>
    )
}