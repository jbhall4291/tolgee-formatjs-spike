
import { Link } from 'react-router-dom'
import logo from '../assets/navlogo.png'


const Navbar = () => {
    return (
        <nav className="navbar">
             <div className="container">
                <div className="logo">
                    <img src={logo} className="w-20" />
                </div>
                <div className="">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar