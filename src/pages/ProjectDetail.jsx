import {useParams, Outlet} from "react-router-dom"
import projectsData from "../data/projectsData"
import technicalWritingData from "../data/technicalWritingData"
import { ContainerDiv, Desc,Title, Highlight } from "./About"
import styled from "styled-components"

const ButtonContainer = styled.div`
    width: 300px;
    margin-inline: auto;
    margin-bottom: 0.4em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5em;

    @media(max-width: 400px) {
        width: 250px;
    }
`

const Button = styled.button`
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
    cursor: pointer;
    &:hover{
        background-color: #cf2359;
        color: #FFF5EE;
        }
    &:active {
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
const ProjImgContainer = styled.div`
    width: 80%;
    margin-inline: auto;
    @media(max-width: 500px) {
        width: 100%;
    }
`

const ProjImg = styled.img`
    width: 100%;
    
`
const ProjHighlight = styled(Highlight)`
    font-weight: 500;
    font-size: 1.2em;
    display: block;
    margin-bottom: 1em;
    text-align: center;
    width: 80%;
    margin-inline: auto;

    @media(max-width: 600px) {
        font-size: 1.1em;
    }
    @media(max-width: 430px) {
        font-size: 1em;
    }
`
export default function ProjectDetail(props) {
    const { title } = useParams()
    const thisProject = projectsData.projects.find(project => project.title === title) || 
    technicalWritingData.articles.find(article => article.title == title)
    return (
        <>
        <ContainerDiv data-aos="zoom-in" data-aos-duration="1500">
            <Title>{thisProject.title}</Title>
            {thisProject.hasOwnProperty('gitHub') ? <ButtonContainer><a href={thisProject.link}><Button>Live Demo</Button></a> 
            <a href={thisProject.gitHub}><Button>GitHub</Button></a></ButtonContainer> 
            : <ButtonContainer><a href={thisProject.link}><Button>Read more</Button></a></ButtonContainer>}
            <ProjHighlight>{thisProject.hook}</ProjHighlight>
            <Desc>{thisProject.detail}</Desc>
            <ProjImgContainer>
                <ProjImg src={thisProject.imgUrl} alt=""/>
                </ProjImgContainer>
        </ContainerDiv>
        </>
    )
}