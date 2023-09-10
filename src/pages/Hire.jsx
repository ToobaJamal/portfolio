import styled from 'styled-components'
import { ContainerDiv, Desc, Title, Highlight } from './About'
import { SocialIcon, SocialIconContainer } from './Contact'

export default function Hire() {
    return (
        <>
            <ContainerDiv data-aos="zoom-in" data-aos-duration="1500">
            <Title>Web Developer and Technical Writer</Title>
            <Desc>I'm a web developer and technical writer with a background in machine learning. 
                I specialize in <Highlight>JavaScript</Highlight> and <Highlight>React</Highlight>.
                I also love writing and combined my writing skills in tech I became a <Highlight>technical writer</Highlight>.
                My toolkit includes <Highlight>HTML, CSS, JavaScript, React, 
                Python for Machine Learning, Jupyter Notebooks, Git, and GitHub</Highlight>—but what matters most is what you need from 
                me as your web developer. Whether it's building your website, technical document or writing blog post 
                that are both effective and accessible, I'll ensure that the content is clear and comprehensible, free from unnecessary jargon.
                I love what I do, and building websites that provide better user experience is my passion. 
                I've written technical articles for famous publications including <Highlight>FreeCodeCamp</Highlight>, 
                <Highlight> Towards Data Science</Highlight>, and <Highlight>Ably</Highlight>. 
                I'm known for my ability to explain complex topics in an easily understandable manner.
                Currently looking for life-changing opportunities. Get in touch if you have got any!</Desc>
                <SocialIconContainer>
            <a href='https://www.linkedin.com/in/tooba-jamal/'><SocialIcon src='./images/linkedin.png'/></a>
            <a href='https://github.com/ToobaJamal'><SocialIcon src='./images/github.png'/></a>
            <a href='https://www.linkedin.com/in/tooba-jamal/'><SocialIcon src='./images/insta.png'/></a>
            <a href='https://twitter.com/codingmysoul'><SocialIcon src='./images/twitter.png'/></a>
            </SocialIconContainer>
            </ContainerDiv>
        </>
    )
}