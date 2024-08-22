import data from "../data/cv.json"
import Project from "./Project"

const Projects = () => {
  return (
    <div id='projects' className='flex justify-center items-center'>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 caja w-5/6 md:w-4/6 ">
        {data.projects.map(p => <Project key={p.url} {...p} />)}
      </div>
    </div>
  )
}

export default Projects
