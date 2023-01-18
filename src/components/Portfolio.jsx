import { useState } from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import projectsData from '../data/projectsData'
import technicalWritingData from '../data/technicalWritingData'
import { ContainerDiv, Title } from "../pages/About"

const PortfolioDiv = styled.div`
padding-inline: 2em;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
padding-block: 1em;
margin-bottom: 4em;
`

const ArticleTitle = styled.div`
    text-align: center;
    max-width: 300px;
    position: absolute;
    left:0;
    right: 0;
    margin-inline: auto;
    top: 1.4em;
    border-radius: 5px;
    padding: .6em;
    font-weight: 500;
    font-size: .8em;
    color: #FFF5EE;
    background-color: #DE3163;
    display: none;
`

export const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
  `

const ProjectContainer = styled.div`
min-width: 0;
min-height: 0;
width: 420px;
height: 100%;
position: relative;
@media (max-width: 910px) {
    width: 400px;
    }
@media (max-width: 870px) {
    width: 420px;
    }
@media (max-width: 470px) {
    width: 380px;
}
@media (max-width: 400px) {
    width: 320px;
}
    
&:hover{
    ${ArticleTitle} {
        display: block;
    }
}
`

const ProjectsContainerParent = styled.div`
    max-width: 850px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    @media (max-width: 470px) {
        width: 380px;
    }
    @media (max-width: 400px) {
        width: 320px;
    }
`

const ButtonContainer = styled.div`
    margin-inline: auto;
    margin-top: 2em;
    width: 80%;
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: center;
    @media (max-width: 505px) {
       gap: 0.7em;
    }
    @media (max-width: 410px) {
        width: 90%;
        gap: 0.5em;
     }
     @media (max-width: 350px) {
        width: 100%;
        gap: 0.4em;
     }
`

const Button = styled.button`
background-color: #DE3163;
color: #FFF5EE;
border: none;
border-radius: 10px;
outline: none;
padding-block: 0.5em;
padding-inline: 1em;
@media (max-width: 505px) {
    font-size: 0.8em;
}
`

export default function Portfolio() {
    const [projectsType, setProjectsType] = useState("all")

    const webDevProjects = projectsData.projects
    console.log(webDevProjects)
    const writingProjects = technicalWritingData.articles
    console.log(projectsType)
    const webProjects = 
    webDevProjects.map(project => (
     <Link to={`/projects/${project.title}`}>
     <ProjectContainer>
         <ArticleTitle>{project.title}</ArticleTitle>
         <ProjectImg src={project.imgUrl} alt="" />
     </ProjectContainer>
     </Link>
    ))

 const techWritingProjects = 
    writingProjects.map(article => (
     <Link to={`/projects/${article.title}`}>
     <ProjectContainer>
         <ArticleTitle>{article.title}</ArticleTitle>
         <ProjectImg src={article.imgUrl} alt="" />
     </ProjectContainer>
     </Link>
    ))
    return (
        <>
        <Title>Portfolio</Title>
        <ButtonContainer>
            <Button onClick={() => setProjectsType("all")}>All</Button>
            <Button onClick={() => setProjectsType("web-dev")}>Web dev</Button>
            <Button onClick={() => setProjectsType("writing")}>Technical writing</Button>
        </ButtonContainer>
        {projectsType === "all" ? <PortfolioDiv ><h3>Web Development Projects</h3> <ProjectsContainerParent>{webProjects}</ProjectsContainerParent> 
        <h3>Technical Writing Projects</h3> <ProjectsContainerParent>{techWritingProjects}</ProjectsContainerParent> 
        <a href="https://www.freecodecamp.org/news/author/tooba/" className="check-out">Check out more of my writing</a>
        </PortfolioDiv > 
        : projectsType === "web-dev" ? <PortfolioDiv><h3>Web Development Projects</h3> {webProjects}</PortfolioDiv> 
        : projectsType === "writing" ? <PortfolioDiv><h3>Technical Writing Projects</h3> {techWritingProjects}</PortfolioDiv> : ""}
        </>
    )
}