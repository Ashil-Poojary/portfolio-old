import React from 'react';

function Education(props) {
    return (
        <div className=' mx-2'>
            <h2 className='font-bold text-xl text-cyan-600 font-mono '>{props.course}</h2>
            <p className='text-gray-400  font-mono'>{props.years}</p>
            <p className='text-gray-400 font-mono'>{props.college}</p>
            <p className='text-gray-400 font-mono'>{props.address}</p>
        </div>
    );
}
export default Education;