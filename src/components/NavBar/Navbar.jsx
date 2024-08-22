import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='header mb-10'>
      <header className="h-auto flex items-center justify-center caja">
        <div className="items-center justify-center h-auto">
          <nav className="w-auto p-5">
            <ul className="list-none sm:flex sm:items-center sm:justify-center h-auto m-auto">
              <li className="p-4 list-none mx-10">
                <a href="#aboutMe" className="w-10 text-center">
                  <FaUser className="text-4xl sm:text-5xl icon" />
                </a>
              </li>              
              <li className=" p-4 list-none mx-10">
                <a href="#studies" className="w-10 text-center">
                  <FaGraduationCap className="text-4xl sm:text-5xl icon" />
                </a>
              </li>
              <li className="p-4 list-none mx-10">
                <a href="#projects" className="w-10 text-center">
                  <FaBriefcase className="text-4xl sm:text-5xl icon" />
                </a>
              </li>
            </ul>
          </nav>
        </div>        
      </header>
    </div>
  )
}

export default Navbar
