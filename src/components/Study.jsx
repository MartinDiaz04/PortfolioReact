

const Study = ({ institution, area, startDate, endDate, description }) => {
    return (

        <div className='m-5 p-1 caja'>
            <h2 className='text-xl sm:text-3xl mt-8'>{institution}</h2>
            <p className='text-xl sm:text-3xl text-center my-8 mx-auto w-auto md:w-3/4'>{area}</p>
            <p className='text-lg sm:text-xl text-center my-8 mx-auto w-auto md:w-3/4'>{startDate} - {endDate}</p>
            <p className='text-md md:text-xl text-center my-8 mx-auto w-auto md:w-3/4'>{description}</p>
        </div>


    )
}

export default Study
