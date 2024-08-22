import data from "../data/cv.json"
import Project from "./Project"

const Projects = () => {
  return (
    <div id='projects' className='grid grid-cols-2 sm:grid-cols-3'>
      {data.projects.map(p => <Project key={p.id} {...p} />)}

    </div>
  )
}

export default Projects
