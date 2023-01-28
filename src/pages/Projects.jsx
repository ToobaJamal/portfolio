import projectsData from "../data/projectsData"
import technicalWritingData from "../data/technicalWritingData"
import {Link, Outlet, useParams} from "react-router-dom"
import styled from 'styled-components'
import { Title, Desc, ContainerDiv } from "./About"
import { ProjHeading } from "../components/Portfolio"
// import { ProjectImg } from "../components/Portfolio"


const ProjectImg = styled.img`
    width: 100%;
    height: 90%;
    display: block;
  `

const ProjectsContainerParent = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-width: 1000px;
    margin-inline: auto;
    gap: 2.4em;
    transition: 3s ease-in-out;
    padding: 2em;
`

const SkillsParent = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: none;
    flex-flow: row wrap;
    gap: 0.5em;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 42%;
    background: transparent;
    @media(max-width: 500px) {
        gap: 0.3em;
    }
    @media(max-width: 380px) {
        bottom:  2.4em;
    }
`
const Skills = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6em;
    color: #FFF5EE;
    background-color: #DE3163;
    border-radius: 10px;
    font-size: 0.8em;
    margin: 0;
    @media (max-width: 500px) {
        font-size: 0.6em;
    }
    @media(max-width: 380px) {
        padding: 0.4em;
    }
`

const ProjectContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    height: 100%;
    min-width: 0;
    min-height: 0;
    color: #303537;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.1);
        ${ProjectImg} {
            -webkit-filter: brightness(70%);
        },
        ${SkillsParent} {
            display: flex;
        }
        
`

const ProjectTitle = styled.p`
        color: #303537;
        text-align: center;
        font-weight: 600;
        @media (max-width: 440px) {
            font-size: .8em;
        }
`
const ProjectsContainerDiv = styled(ContainerDiv)`
        text-align: center;
`

export default function Projects() {
    const params = useParams()
    const userProjects = projectsData.projects.map(project => (
        <ProjectContainer>
            <Link to={`/projects/${project.title}`}>
                
                    <ProjectImg src={project.imgUrl} alt={project.title} loading='lazy'/>
                    <SkillsParent>
                    {project.skills.map(skill => (
                        <Skills>{skill}</Skills>
                    ))}
                    </SkillsParent>
                    <ProjectTitle>{project.title}</ProjectTitle>
            </Link> 
            </ProjectContainer>
    ))

    const writingProjects = technicalWritingData.articles.map(article => (
        <ProjectContainer>
        <Link to={`/projects/${article.title}`}>
                    <ProjectImg src={article.imgUrl} alt={article.title} loading='lazy'/>
                    <SkillsParent>
                    {article.skills.map(skill => (
                        <Skills>{skill}</Skills>
                    ))}
                    </SkillsParent>
                    <ProjectTitle>{article.title}</ProjectTitle>
            </Link> 
            </ProjectContainer>
    ))

    return (
        <>
        <ProjectsContainerDiv data-aos="zoom-in" data-aos-duration="1500">       
            {!params.title && <Title>Projects</Title>}
            {!params.title &&<Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            In, nam soluta voluptas libero placeat sapiente quia earum cupiditate, 
            quam numquam eos nobis alias, ullam pariatur ea repudiandae quasi odit molestias!</Desc>}
        
            {!params.title &&<ProjHeading>Web development projects</ProjHeading>}
            {!params.title && <ProjectsContainerParent> {userProjects} </ProjectsContainerParent>}
            {!params.title &&<ProjHeading>Technical Writing projects</ProjHeading>}
            {!params.title && <ProjectsContainerParent>{writingProjects} </ProjectsContainerParent>}
            <a href="https://www.freecodecamp.org/news/author/tooba/" 
        className="check-out">Check out more of my writing</a>
            <Outlet/>
        </ProjectsContainerDiv>
        </>
    )
}

