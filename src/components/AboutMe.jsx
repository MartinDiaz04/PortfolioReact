import data from '../data/cv.json'
import { FaRegFilePdf } from 'react-icons/fa'

const AboutMe = () => {

    return (
        <div id='aboutMe' className='flex items-center justify-center my-10'>
            <div className='text-center w-5/6 md:w-4/6 xl:w-5/6 caja md:p-8'>
                <h1 className='text-4xl sm:text-5xl my-5'>{data.basics.name}</h1>
                <h2 className='text-3xl sm:text-4xl mt-12'>{data.basics.label}</h2>
                <img src={data.basics.image} className='mt-5 mx-auto w-2/4 lg:w-1/4 rounded-full'></img>
                <p className='text-lg sm:text-2xl p-3 text-center my-8 mx-auto w-3/4 '>{data.basics.summary}</p>
                <a
                    href="MartinDiazPreiero.pdf"
                    download="Martin Diaz Preiero"
                    className="mx-auto flex justify-center mb-4 w-1/4 p-3 rounded-lg descargarCV"
                >                    
                    Descargar CV
                </a>
            </div>
        </div>

    )
}

export default AboutMe

