import { Link } from "react-router-dom"
import AboutMeShort from "../components/AboutMeShort"
import WhyMe from "../components/WhyMe"
import Testimonials from "../components/Testimonials"

export default function Home() {
    return (
        <div className="home">
            <h1>Hi, I am Tooba</h1>
            <h1>I am a freelance front-end web developer and technical writer</h1>
            <AboutMeShort />
            <WhyMe />
            <Testimonials />
        </div>
    )
}