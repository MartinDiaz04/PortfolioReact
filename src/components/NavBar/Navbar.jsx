import { FaUser, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../features/languageSlice";
import Switch from '@mui/material/Switch';
import { useState } from 'react';

const Navbar = () => {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
  }

  return (
    <div className='header mb-10'>
      <header className="h-auto xl:h-20 flex flex-col sm:flex-row items-center justify-between caja">        
        <div className="w-full">
          <nav className="w-full sm:w-auto p-5">
            <ul className="list-none flex flex-col sm:flex-row items-center justify-center h-auto m-auto">
              <li className="p-4 list-none mx-10">
                <a href="#aboutMe" className="w-6 2xl:w-10 text-center">
                  <FaUser className="text-4xl 2xl:text-5xl  icon" />
                </a>
              </li>
              <li className="p-4 list-none mx-10">
                <a href="#studies" className="w-6 2xl:w-10 text-center">
                  <FaGraduationCap className="text-4xl 2xl:text-5xl icon" />
                </a>
              </li>
              <li className="p-4 list-none mx-10">
                <a href="#projects" className="w-6 2xl:w-10 text-center">
                  <FaBriefcase className="text-4xl 2xl:text-5xl icon" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
      </header>
    </div>
  )
}

export default Navbar;
