import { Link } from "react-router-dom"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className="footer">
            <div>
                <p>Explore</p>
                <Link to="/about">About</Link>
                <Link to="/hire">Hire me</Link>
                <Link to="/projects">Portfolio</Link>
            </div>
            <div>
                <p>Get in touch</p>
                <Link to="/contact">Contact</Link>
                <span>LinkedIn</span>
                <span>Instagram</span>
                <span>Discord</span>
            </div>
            <div>
                <span>© {year} Tooba Jamal - All right Reserved.</span>
            </div>
        </div>
    )
}