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
`

const Button = styled.a`
    background-color: yellow;
    padding: 1em;
    border-radius: 10px;
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
        <ContainerDiv>
            <Title>{thisProject.title}</Title>
            {thisProject.hasOwnProperty('gitHub') ? <ButtonContainer><Button href={thisProject.link}>Live Demo</Button> 
            <Button href={thisProject.gitHub}>GitHub</Button> </ButtonContainer> 
            : <Button href={thisProject.link}>Read more</Button>}
            
            <Desc>{thisProject.detail}</Desc>
            <ProjImgContainer>
                <ProjImg src={thisProject.imgUrl} alt=""/>
                </ProjImgContainer>
        </ContainerDiv>
        </>
    )
}