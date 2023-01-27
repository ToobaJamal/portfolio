import {useParams, Outlet} from "react-router-dom"
import projectsData from "../data/projectsData"
import technicalWritingData from "../data/technicalWritingData"
import { ContainerDiv, Desc,Title } from "./About"
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

const Button = styled.a`
    color: #FFF5EE;
    background-color: #DE3163;
    padding-inline: 1em;
    padding-block: 0.6em;
    border-radius: 10px;
    margin-bottom: 0.7em;
    &:hover{
        background-color: #cf2359;
        color: #FFF5EE;
        }
    &:active {
        background-color: #cf2359;
        color: #FFF5EE;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
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
`

const ProjImg = styled.img`
    width: 100%;
    
`

export default function ProjectDetail(props) {
    const { title } = useParams()
    console.log(technicalWritingData)
    console.log(title)
    const thisProject = projectsData.projects.find(project => project.title === title) || 
    technicalWritingData.articles.find(article => article.title == title)
    console.log(technicalWritingData.articles.find(article => article.title === "What is an API and How Does it Work? APIs for Beginners"))
    return (
        <>
        <ContainerDiv data-aos="zoom-in" data-aos-duration="1500">
            <Title>{thisProject.title}</Title>
            {thisProject.hasOwnProperty('gitHub') ? <ButtonContainer><Button href={thisProject.link}>Live Demo</Button> 
            <Button href={thisProject.gitHub}>GitHub</Button> </ButtonContainer> 
            : <ButtonContainer><Button href={thisProject.link}>Read more</Button></ButtonContainer>}
            
            <Desc>{thisProject.detail}</Desc>
            <ProjImgContainer>
                <ProjImg src={thisProject.imgUrl} alt=""/>
                </ProjImgContainer>
        </ContainerDiv>
        </>
    )
}