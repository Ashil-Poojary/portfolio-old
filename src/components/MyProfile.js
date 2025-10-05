import React, { useState } from 'react';
import portfolioData from '../data/portfolioData.json';

function MyProfile(props) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { personalInfo } = portfolioData;

    function resumeDownload() {
        const urls = personalInfo.resumeUrl;
        const filename = urls.split("/").pop();
        console.log(filename);
        const aTag = document.createElement("a");
        aTag.href = urls;
        aTag.setAttribute("download", filename);
        aTag.click();
        aTag.remove();
    }

    return (
        <div className="text-center">
            {/* Profile Image with Animation */}
            <div className="relative mb-6">
                <img 
                    className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30 shadow-2xl mx-auto transition-all duration-300 hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    src={personalInfo.profileImage} 
                    alt="profile pic"
                    onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>

            {/* Profile Information */}
            <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white font-mono">
                    {personalInfo.name.split(' ')[0]} <span className="text-purple-400">{personalInfo.name.split(' ')[1]}</span>
                </h1>
                
                <div className="flex items-center justify-center space-x-2">
                    <h4 className="text-xl font-semibold text-blue-300 font-mono">
                        {personalInfo.title}
                    </h4>
                </div>

                <div className="flex items-center justify-center space-x-2 text-blue-300 font-mono">
                    <span className="text-purple-400">|</span>
                    <span>{personalInfo.experience}</span>
                    <span className="text-purple-400">|</span>
                    <span>{personalInfo.technologies}</span>
                    <span className="text-purple-400">|</span>
                </div>

                <p className="text-white/80 font-mono text-sm md:text-base leading-relaxed max-w-md mx-auto">
                    {personalInfo.summary}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {personalInfo.skills.map((skill, index) => (
                        <span 
                            key={skill}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono text-white border border-white/20 hover:bg-purple-500/20 transition-all duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Download CV Button */}
                <div className="pt-4">
                    <button 
                        className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold font-mono rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={resumeDownload}
                    >
                        <span className="relative z-10 flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download CV</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;