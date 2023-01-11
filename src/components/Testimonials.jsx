import styled from 'styled-components'

const TestimonialsDiv = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    gap: 2em;
    margin-block: 1em;
    padding-block: 3em;
`

const Testimonial = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const TestimonialTitle = styled.h1`
    text-align: center;
`

const Name = styled.h3`
   color: red;
 
`
const Desc = styled.p`
   color: green;

`

export default function Testimonials() {
    return (
        <>
            <TestimonialTitle>Testimonials</TestimonialTitle>
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