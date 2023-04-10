import React from 'react';
import Projects from "./Projects";

function ProjectList(props) {
    return (
        <div className='bg-gray-700 rounded-3xl justify-start px-3   pb-4'>
            <div className="text-black font-bold font-mono  bg-blue-400 rounded-full text-center mt-2 ">
                Projects :
            </div>
            <div className='overflow-auto h-96'>
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
                <hr className='my-2'/>
                <Projects
                    title="About this Project"
                    role="web Developer"
                    timeline="March 2023 "
                    discription="Portfolio Web Application. Using React"

                    code='https://github.com/P00JARY/portfolio'
                />
            </div>


        </div>
    );
}

export default ProjectList;