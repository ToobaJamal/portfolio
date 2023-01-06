import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><span>Tooba Jamal</span></Link>
            <Link to="/about">About</Link>
            <Link to="/hire">Hire me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}