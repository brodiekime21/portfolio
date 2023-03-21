import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navbar flex items-center justify-between flex-wrap p-6">
            <Link to={'/'} className="flex items-center mr-6">
                <img className="logoNavBar h-8 logo-hover" src={require('../images/navbar-logo.png')} alt="SampleWAV logo"/>
            </Link>

            <div className="flex items-center justify-between font-bold">
                <div className="">
                <NavLink to={'/'} exact activeClassName="text-white" className="mr-6 text-2xl hover:text-white focus:outline-none focus:ring focus:ring-white">Home</NavLink>
                <NavLink to={'/projects'} activeClassName="text-white" className="mr-6 text-2xl hover:text-white focus:outline-none focus:ring focus:ring-white ">Projects</NavLink>
                <NavLink to={'/about'} activeClassName="text-white" className="mr-6 text-2xl hover:text-white focus:outline-none focus:ring focus:ring-white ">About</NavLink>
                <NavLink to={'/contact'} activeClassName="text-white" className="mr-6 text-2xl hover:text-white focus:outline-none focus:ring focus:ring-white">Contact</NavLink>
                </div>
                <a href='https://www.linkedin.com/in/brodie-kime/' activeClassName="text-white" className="mr-6 text-l hover:text-white focus:outline-none focus:ring focus:ring-white">LinkedIn</a>
                <a href='https://github.com/brodiekime21' activeClassName="text-white" className="mr-6 text-l hover:text-white focus:outline-none focus:ring focus:ring-white ">Github</a>
            </div>

        </nav>
    )
}

export default Navbar