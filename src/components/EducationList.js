import React from 'react';
import Education from "./Education";

function EducationList(props) {
    return (
        <div className='bg-gray-700  rounded-3xl justify-start px-2 space-x-1 py-2'>
            <div className='text-red-600 font-bold font-mono'>
                Education :
            </div>
            <Education
                years="2018-2021"
                course="BCA"
                college="St Aloysius College (Autonomous)"
                address="Mangalore"
            />
            <hr className='border-black border-b-0 my-2'/>
            <Education
                years="2021-2023"
                course="MCA"
                college="St Aloysius College of Management and Information Technology - AIMIT (Autonomous)"
                address="Mangalore"
            />
        </div>
    );
}

export default EducationList;