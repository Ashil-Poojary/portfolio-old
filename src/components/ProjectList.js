import React from 'react';
import Projects from "./Projects";

function ProjectList(props) {
    return (
        <div className='bg-gray-700 rounded-3xl justify-start px-3 overflow-auto h-96  pb-4'>
            <div className="text-red-600 font-bold font-mono">
                Projects :
            </div>
            <Projects
                title="Prakruthi Driving School Management System "
                role="Frontend And Backend Developer "
                timeline="2022-2030"
                discription=" Developed using MERN stack. Developing a website for a Driving School to completely automate their processes."
                code='https://github.com/P00JARY/MERN'
            />

            <hr className='my-2'/>
            <Projects
                title="Robo Friends"
                role="Web Developer "

                timeline="Apr-2023"
                discription="Application to display all the Friends using react "
                link="https://robo1-friends.netlify.app/"
                code='https://github.com/P00JARY/robo-react-application'
            />

            <hr className='my-2'/>
            <Projects
                title="Dump-Box"
                role="Android Developer "
                timeline="August 2022 - October 2022"
                discription="An android application that works as a cloud storage to store images, text and pdf files."
            />
            <hr className='my-2'/>
            <Projects
                title="SMART GARDEN"
                role="UI Designer - Led the UI Designing with flutter."
                timeline="March 2021 - July 2021"
                discription="It is an IOT based system which aims to utilize the features of embedded system to make Gardening easy."
            />



        </div>
    );
}

export default ProjectList;