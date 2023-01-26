import { useState } from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import projectsData from '../data/projectsData'
import technicalWritingData from '../data/technicalWritingData'
import { Title } from "../components/WhyMe"

const PortfolioDiv = styled.div`
padding-inline: 2em;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
padding-bottom: 1em;
margin-bottom: 100px;
`
export const ProjHeading = styled.h3`
    margin-bottom: 1em;
    font-size: 1.6em;
    @media(max-width: 440px) {
        font-size: 1.2em;
    }
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
    gap: 0.6em;
    margin-bottom: 1em;
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
font-weight: 500;
border-radius: 10px;
cursor: pointer;
outline: none;
padding-block: 0.5em;
padding-inline: 1em;
@media (max-width: 505px) {
    font-size: 0.8em;
}
`

const PortfolioTitle = styled(Title)`
@media(max-width: 852px) {
    margin-top: 100px;
}
@media(max-width: 600px) {
    margin-top: 70px;
}
`

export default function Portfolio() {
    const [projectsType, setProjectsType] = useState("all")

    const webDevProjects = projectsData.projects
    const writingProjects = technicalWritingData.articles
    const webProjects = 
    webDevProjects.map(project => (
     <Link to={`/projects/${project.title}`}>
     <ProjectContainer>
         <ArticleTitle>{project.title}</ArticleTitle>
         <ProjectImg src={project.imgUrl} alt={project.title} loading='lazy' />
     </ProjectContainer>
     </Link>
    ))

 const techWritingProjects = 
    writingProjects.map(article => (
     <Link to={`/projects/${article.title}`}>
     <ProjectContainer>
         <ArticleTitle>{article.title}</ArticleTitle>
         <ProjectImg src={article.imgUrl} alt={article.title} loading='lazy' />
     </ProjectContainer>
     </Link>
    ))
    return (
        <>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <ButtonContainer>
            <Button onClick={() => setProjectsType("all")}>All</Button>
            <Button onClick={() => setProjectsType("web-dev")}>Web dev</Button>
            <Button onClick={() => setProjectsType("writing")}>Technical writing</Button>
        </ButtonContainer>
        {projectsType === "all" ? <PortfolioDiv ><ProjHeading>Web Development Projects</ProjHeading> <ProjectsContainerParent>{webProjects}</ProjectsContainerParent> 
        <ProjHeading>Technical Writing Projects</ProjHeading> <ProjectsContainerParent>{techWritingProjects}</ProjectsContainerParent> 
        <a href="https://www.freecodecamp.org/news/author/tooba/" className="check-out">Check out more of my writing</a>
        </PortfolioDiv > 
        : projectsType === "web-dev" ? <PortfolioDiv><ProjHeading>Web Development Projects</ProjHeading> {webProjects}</PortfolioDiv> 
        : projectsType === "writing" ? <PortfolioDiv><ProjHeading>Technical Writing Projects</ProjHeading> {techWritingProjects}</PortfolioDiv> : ""}
        </>
    )
}