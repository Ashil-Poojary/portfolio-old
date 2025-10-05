import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from './TopBar';

function LaunchPage(props) {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const clicked = () => {
        navigate('/Home');
    }

    return (
        <div className='flex flex-col w-screen h-screen'>
            <TopBar />
            <div className='flex justify-center items-center flex-1 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden'>
            {/* Simple background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
            </div>

            <div className='relative z-10 sm:mt-10 md:mt-20 lg:mt-32'>
                <div className={`transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    <h1 className='flex text-purple-400 justify-start text-3xl sm:py-1 md:py-1 lg:py-1 sm:text-2xl md:text-3xl lg:text-6xl font-bold font-mono'>
                        Hello <p className='text-blue-400'>,</p>
                    </h1>
                    <h1 className='flex justify-start sm:py-1 md:py-1 lg:py-1 text-3xl sm:text-2xl md:text-3xl lg:text-6xl font-bold font-mono text-white'>
                        I'm Ashil Poojary
                    </h1>
                    <h3 className='flex justify-start sm:py-1 md:py-1 lg:py-1 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-normal font-mono text-gray-300'>
                        Full Stack Developer
                    </h3>
                    
                    {/* Enhanced button with animation */}
                    <button 
                        className='group relative my-8 py-3 px-8 rounded-full text-white font-bold font-mono bg-gradient-to-r from-purple-600 to-blue-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg' 
                        onClick={clicked}
                    >
                        <span className="relative z-10 flex items-center space-x-2">
                            <span>Know More</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            
            {/* Enhanced image with animation */}
            <div className={`relative transition-all duration-700 delay-200 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}`}>
                <img 
                    className={`w-1/2 md:my-0 lg:my-0 sm:w-1/3 md:w-1/4 lg:w-1/3 h-auto my-8 sm:my-0 rounded-full border-4 border-white/30 shadow-2xl transition-all duration-300 hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    src='image/MySVG.svg' 
                    alt='my pic'
                    onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
            </div>
        </div>
    );
}

export default LaunchPage;