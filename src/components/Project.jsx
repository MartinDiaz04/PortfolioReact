import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Project = ({ name, description, highlights, url, github, image }) => {
    return (
        <div className='flex flex-col m-5 p-3 caja w-auto rounded-lg'>
            <div className="flex-grow">
                <h2 className='text-2xl sm:text-4xl mt-5 text-center'>{name}</h2>
                <a href={url}>
                    <img src={image} alt={name} className='w-96 mx-auto mt-5 rounded-lg shadow-md' />
                </a>
                <p className='text-xl sm:text-2xl text-center my-8 mx-auto w-auto md:w-3/4'>{description}</p>
            </div>
            <div className="flex justify-between items-center mt-5">
                <div className="flex flex-wrap gap-4">
                    {highlights.map(h => (
                        <span key={h} className='bg-gray-700 text-white py-1 px-3 rounded-2xl text-sm font-medium'>
                            {h}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <a href={url} className="iconsProject">
                        <GrDeploy className='text-2xl' />
                    </a>
                    <a href={github} className="iconsProject">
                        <FaGithub className='text-2xl' />
                    </a>
                </div>
            </div>
        </div>
    );
};


export default Project;