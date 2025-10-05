import React, { useState, useEffect } from 'react'
import ContactMe from "./ContactMe";
import MyProfile from "./MyProfile";
import EducationList from "./EducationList";
import ProjectList from "./ProjectList";
import TopBar from "./TopBar";
import ExperienceList from "./ExperienceList";

export default function Profile() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
            <TopBar />
            
            <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
                <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                    
                    {/* About Section */}
                    <section id="about" className="mb-16">
                        <MyProfile/>
                    </section>

                    {/* Experience Section */}
                    <section id="experience" className="mb-16">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white font-mono mb-2">
                                My <span className="text-purple-400">Experience</span>
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </div>
                        <ExperienceList/>
                    </section>

                    {/* Education Section */}
                    <section id="education" className="mb-16">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white font-mono mb-2">
                                My <span className="text-purple-400">Education</span>
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </div>
                        <EducationList/>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="mb-16">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white font-mono mb-2">
                                My <span className="text-purple-400">Projects</span>
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </div>
                        <ProjectList/>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="mb-16">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white font-mono mb-2">
                                Get In <span className="text-purple-400">Touch</span>
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </div>
                        <ContactMe/>
                    </section>

                    {/* Footer */}
                    <footer className="text-center py-8 border-t border-white/10">
                        <div className="flex justify-center items-center space-x-2">
                            <span className='text-white/70' dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
                            <p className='text-white/70 font-mono'>2024 All rights reserved Ashil Poojary</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
