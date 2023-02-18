import styled from 'styled-components'
import { Title } from "../components/WhyMe"

const TestimonialsDiv = styled.div`
    max-width: 850px;
    margin-inline: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 2em;
    gap: 1.4em;
    margin-top: 2em;
    @media(max-width: 450px) {
        width: 100%;
        padding-inline: 1em;
        margin-inline: 0;
    }
`

const Testimonial = styled.div`
    display: flex;
    flex-direction: column;
    
    background-color: #FAF9F6;
    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 6px;
   
    padding: 1em;
    max-width: 350px;
    @media (max-width: 860px) and (min-width: 800px){
        max-width: 320px;
        }
    @media (max-width: 800px) and (min-width: 720px){
        max-width: 300px;
        }
`

const TestimonialTitle = styled.h1`
    text-align: center;
    margin-bottom: 1em;
    @media (max-width: 770px) {
        font-size: 2em;
        }
`

const Name = styled.h3`
background-color: #FAF9F6;
   margin: 0;
   padding: 0;
 
`
const Desc = styled.p`
background-color: #FAF9F6;
    margin:0;
    padding: 0;
`

export default function Testimonials() {
    return (
        <div className="testimonials">
            <Title data-aos="flip-right" data-aos-duration="1000">Testimonials</Title>
            <TestimonialsDiv>
            <Testimonial data-aos="zoom-in" data-aos-duration="1500">
                <Name >Per Harald Borgen - CEO Scrimba</Name>
                <Desc>"Tooba has shown to have strong HTML, CSS, and JavaScript skills through 
                    giving code reviews in the Scrimba community. She excels at scanning through codebases, 
                    finding the areas that need improvement, and suggesting technical solutions for the given problems. 
                    Giving these code reviews is something only a small subset of Scrimba students do. 
                    However, Tooba, has done it time and again without ever asking for anything in return, 
                    displaying great qualities as a team player."
                </Desc>
            </Testimonial>
            <div className='testimonial-divider'>
            <Testimonial data-aos="zoom-in" data-aos-duration="1500" className='middle-testimonial'>
                <Name>JWinifred John - Technical Writer</Name>
                <Desc>"I really loved your article on API, even a two year old could understand it ."
                </Desc>
            </Testimonial>
            <Testimonial data-aos="zoom-in" data-aos-duration="1500">
                <Name>Josh Weinsten - Software Engineer</Name>
                <Desc>"I enjoyed your fcc article on APIs. 
                    While I’ve worked with them quite a bit and read other explanations, 
                    I found this one particularly clear and informative!"
                </Desc>
            </Testimonial>
            </div>
            </TestimonialsDiv>
        </div>
    )
}