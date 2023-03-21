// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="bg-black flex items-center justify-between flex-wrap p-6">
            {/* <Link to={'/'} className="flex items-center mr-6">
                <img className="logoNavBar h-10" src={require('../logoColor.png')} alt="SampleWAV logo"/>
            </Link> */}

            <div className="flex items-center font-bold">
                <NavLink to={'/'} exact activeClassName="text-white" className="mr-6 text-xl text-purple-600 hover:text-white">Home</NavLink>
                <NavLink to={'/projects'} activeClassName="text-white" className="mr-6 text-xl text-purple-600 hover:text-white ">Projects</NavLink>
                <NavLink to={'/about'} activeClassName="text-white" className="mr-6 text-xl text-purple-600 hover:text-white ">About</NavLink>
                <NavLink to={'/contact'} activeClassName="text-white" className="mr-6 text-xl text-purple-600 hover:text-white ">Contact</NavLink>
                <a href='https://www.linkedin.com/in/brodie-kime/' activeClassName="text-white" className="mr-6 text-xl text-purple-600 hover:text-white ">LinkedIn</a>
                <a href='https://github.com/brodiekime21' activeClassName="text-white" className="mr-6 text-xl text-purple-600 hover:text-white ">Github</a>


            </div>

        </nav>
    )
}

export default Navbar