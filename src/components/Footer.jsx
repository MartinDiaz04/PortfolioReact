import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import data from "../data/cv.json";
const Footer = () => {
  return (
    <div className='flex justify-center items-center caja mt-5'>
        <a href={data.basics.github}>
            <FaGithub className='text-4xl sm:text-5xl m-5 tecnologias' />   
        </a>
        <a href={data.basics.linkedin}>
            <FaLinkedin className='text-4xl sm:text-5xl m-5 tecnologias' />   
        </a>
        <p>{data.basics.email}</p>
    </div>
  )
}

export default Footer
