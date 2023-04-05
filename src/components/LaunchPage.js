import React from 'react';
import { useNavigate } from 'react-router-dom';

function LaunchPage(props) {

    const navigate = useNavigate()
    const clicked = () => {
        navigate('/Home')
    }
    return (


        <div className='flex justify-center items-center w-screen h-screen px-4 sm:px-8 md:px-16 lg:px-32 bg-teal-600'>
            <div className='sm:mt-10 md:mt-20 lg:mt-32'>
                <h1 className='flex text-orange-500 justify-start text-3xl sm:py-1  md:py-1 lg:py-1 sm:text-2xl md:text-3xl lg:text-6xl font-bold font-mono '>Hello <p className='text-red-600'>,</p></h1>
                <h1 className='flex justify-start sm:py-1 md:py-1 lg:py-1 text-3xl sm:text-2xl md:text-3xl lg:text-6xl font-bold font-mono'>I'm Ashil Poojary</h1>
                <h3 className='flex justify-start sm:py-1 md:py-1 lg:py-1 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-normal font-mono'>Full stack Developer</h3>
                <button className='my-8 py-2 px-4 rounded-full text-black bg-cyan-700 hover:bg-orange-500 ' onClick={clicked}>Know more</button>
            </div>
            <img className='w-1/2  md:my-0 lg:my-0   sm:w-1/3 md:w-1/4 lg:w-1/3 h-auto my-8 sm:my-0' src='image/MySVG.svg' alt='my pic' />
        </div>





    );
}

export default LaunchPage;