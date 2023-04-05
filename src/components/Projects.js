import React from 'react';



function Projects(props) {


    const Link = props.link
    const Code = props.code
    if (Link) {
        return (
            <div className='mt-3 px-2 justify-end  text-gray-400'>

                <p className='font-bold text-cyan-600 text-lg'>{props.title}</p>

                <p>{props.role}</p>
                <p>{props.timeline}</p>
                <p>{props.discription}</p>

                <div className='flex '>
                    <button
                        className=' font-bold font-mono hover:bg-blue-600 mx-4 px-4 my-2 bg-teal-600 rounded-2xl text-black'
                        onClick={() => {
                            window.open(Link)
                        }}
                    >Live
                    </button>
                    <button
                        className=' font-bold font-mono hover:bg-blue-600  px-4 my-2 bg-teal-600 rounded-2xl text-black'
                        onClick={() => {
                            window.open(Link)
                        }}
                    >Source
                    </button>
                </div>
            </div>
        );
    } else if (Code) {
        return (
            <div className='mt-3 px-2 justify-end  text-gray-400'>
                <p className='font-bold text-cyan-600 text-lg'>{props.title}</p>

                <p>{props.role}</p>
                <p className='font-thin'>{props.timeline}</p>
                <p>{props.discription}</p>
                <button
                    className=' font-bold font-mono hover:bg-blue-600  px-4 my-2 bg-teal-600 rounded-2xl text-black'
                    onClick={() => {
                        window.open(Code)
                    }}
                >Source
                </button>
            </div>
        );
    }
    return (
        <div className='mt-3 px-2 justify-end  text-gray-400'>
            <p className='font-bold text-cyan-600 text-lg'>{props.title}</p>

            <p>{props.role}</p>
            <p className='font-thin'>{props.timeline}</p>
            <p>{props.discription}</p>
        </div>
    );

}

export default Projects;