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
    justify-content: space-around;
    background-color: #FAF9F6;
    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 6px;
    align-items: center;
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
            <Title data-aos="flip-right">Testimonials</Title>
            <TestimonialsDiv>
            <Testimonial>
                <Name >Winifred John</Name>
                <Desc>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam dapibus eget tortor in lobortis. 
                    Fusce at mi finibus, eleifend nisi et, accumsan nisi. 
                    Maecenas non felis augue. 
                    Etiam lobortis, arcu quis ornare dapibus, eros odio mattis metus, mattis semper justo lorem id odio. 
                    Vestibulum vitae felis aliquam, facilisis odio malesuada, tempus justo."
                </Desc>
            </Testimonial>
            <Testimonial>
                <Name>Josh Weinstein</Name>
                <Desc>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam dapibus eget tortor in lobortis. 
                    Fusce at mi finibus, eleifend nisi et, accumsan nisi. 
                    Maecenas non felis augue. 
                    Etiam lobortis, arcu quis ornare dapibus, eros odio mattis metus, mattis semper justo lorem id odio. 
                    Vestibulum vitae felis aliquam, facilisis odio malesuada, tempus justo."
                </Desc>
            </Testimonial>
            <Testimonial>
                <Name>Deeti Singh</Name>
                <Desc>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam dapibus eget tortor in lobortis. 
                    Fusce at mi finibus, eleifend nisi et, accumsan nisi. 
                    Maecenas non felis augue. 
                    Etiam lobortis, arcu quis ornare dapibus, eros odio mattis metus, mattis semper justo lorem id odio. 
                    Vestibulum vitae felis aliquam, facilisis odio malesuada, tempus justo."
                </Desc>
            </Testimonial>
            </TestimonialsDiv>
        </div>
    )
}