import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="bg-black flex items-center justify-between flex-wrap p-6">
            {/* <Link to={'/'} className="flex items-center mr-6">
                <img className="logoNavBar h-10" src={require('../logoColor.png')} alt="SampleWAV logo"/>
            </Link> */}

            <div className="flex items-center font-bold">
                <NavLink to={'/'} exact activeClassName="text-white" className="mr-6 text-xl text-purple-600 hover:text-white">Home</NavLink>
                <NavLink to={'/browse-samples'} activeClassName="text-white" className="mr-6 text-xl text-purple-600 hover:text-white ">Browse Samples</NavLink>
                <NavLink to={'/browse-packs'} activeClassName="text-white" className="mr-6 text-xl text-purple-600 hover:text-white ">Browse Packs</NavLink>
                {/* <SearchBar /> */}

            </div>

        </nav>
    )
}

export default Navbar