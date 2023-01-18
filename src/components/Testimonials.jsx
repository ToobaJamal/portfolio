import styled from 'styled-components'
import { Title } from '../pages/About'
const TestimonialsDiv = styled.div`
    max-width: 850px;
    margin-inline: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    gap: 0.5em;
    margin-block: 2em;
    padding-inline: 2em;
`

const Testimonial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
   color: red;
   margin: 0;
   padding: 0;
 
`
const Desc = styled.p`
    margin:0;
    padding: 0;
   color: green;

`

export default function Testimonials() {
    return (
        <>
            <Title>Testimonials</Title>
            <TestimonialsDiv>
            <Testimonial>
                <Name>Winifred John</Name>
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
        </>
    )
}