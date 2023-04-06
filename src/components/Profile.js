import React from 'react'
import ContactMe from "./ContactMe";
import MyProfile from "./MyProfile";
import EducationList from "./EducationList";
import ProjectList from "./ProjectList";

export default function Profile() {



    return (
        <div className="flex flex-col items-center min-h-screen bg-teal-600 to-blue-600 ">
            <div className="w-full max-w-3xl px-6 py-5 bg-gray-800 rounded-3xl shadow-md my-10 h-3/5">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'>
                    <MyProfile/>
                    <ContactMe/>
                </div>
                <hr className='border-gray-700 border-2 my-2 '/>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-12'>
                    <EducationList/>
                    <ProjectList/>
                </div>
                <hr className='my-3 border-gray-700'/>
                <div className='flex justify-center items-center'>
                    <span className='text-gray-400' dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
                    <p className='text-gray-400'> 2023 All rights reserved Ashil Poojary</p>

                </div>
            </div>
        </div>


    )
}
