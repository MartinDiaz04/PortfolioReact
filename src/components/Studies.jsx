import data from "../data/cv.json"
import Study from "./Study"
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

const Studies = () => {  
  return (
    <div id='studies' className='flex items-center justify-center my-10'>
      <div className='text-center sm:w-4/6 w-5/6 caja p-8'>
        <h1 className='text-3xl sm:text-4xl my-5'>Educación</h1>
        {data.education.map(e => <Study key={e.id} {...e} />)}
        <h3 className='text-3xl sm:text-4xl my-5'>Tecnologías</h3>
        <div className="grid xl:flex xl:items-center xl:justify-center grid-cols-2 sm:grid-cols-3">
          <a href="https://www.typescriptlang.org/" className="flex items-center justify-center">
            <SiTypescript className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
          <a href="https://lenguajehtml.com/" className="flex items-center justify-center">
            <FaHtml5 className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
          <a href="https://www.javascript.com/" className="flex items-center justify-center">
            <IoLogoJavascript className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
          <a href="https://nodejs.org/en" className="flex items-center justify-center">
            <FaNodeJs className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
          <a href="https://www.mongodb.com/" className="flex items-center justify-center">
            <SiMongodb className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
          <a href="https://www.java.com/es/" className="flex items-center justify-center">
            <FaJava className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
          <a href="https://tailwindcss.com/" className="flex items-center justify-center">
            <RiTailwindCssFill className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
          <a href="https://es.react.dev/" className="flex items-center justify-center">
            <FaReact className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
          <a href="https://getbootstrap.com/" className="flex items-center justify-center">
            <FaBootstrap className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
          <a href="https://lenguajecss.com/" className="flex items-center justify-center">
            <FaCss3 className='text-4xl sm:text-5xl m-5 tecnologias' />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Studies
