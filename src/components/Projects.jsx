import data from "../data/cv.json"
import Project from "./Project"

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col justify-center items-center'>
      <h1 className="text-3xl sm:text-5xl mt-10">Proyectos</h1>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 caja w-5/6 md:w-4/6 xl:w-5/6 ">
        {data.projects.map(p => <Project key={p.url} {...p} />)}
      </div>
    </div>
  )
}

export default Projects
