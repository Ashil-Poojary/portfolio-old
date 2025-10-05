import React from 'react';
import portfolioData from '../data/portfolioData.json';

function ExperienceList(props) {
    const { experience, statusColors } = portfolioData;

    const getStatusColor = (status) => {
        return statusColors[status] || statusColors.default || "bg-gray-500/20 text-gray-400 border-gray-500/30";
    };

    return (
        <div className="space-y-8">
            {/* Experience Timeline */}
            <div className="space-y-8">
                {experience.map((exp, index) => (
                    <div 
                        key={index}
                        className="relative group"
                    >
                        {/* Timeline Line */}
                        {index < experience.length - 1 && (
                            <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent opacity-30"></div>
                        )}
                        
                        {/* Experience Card */}
                        <div className="relative p-6 border-l-2 border-purple-500/30 pl-8 hover:border-purple-500/60 transition-all duration-300">
                            {/* Timeline Dot */}
                            <div className="absolute -left-2 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white/20"></div>
                            
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 text-xs font-mono rounded-full border ${getStatusColor(exp.status)}`}>
                                    {exp.status}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-white font-mono mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                    {exp.position}
                                </h3>
                                
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span className="text-blue-300 font-mono font-semibold">{exp.company}</span>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-white/80 font-mono">{exp.timeline}</span>
                                        <span className="text-white/50">•</span>
                                        <span className="text-white/70 font-mono">{exp.duration}</span>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-purple-400 font-mono">Key Achievements:</h4>
                                    <ul className="space-y-1">
                                        {exp.achievements.map((achievement, achievementIndex) => (
                                            <li key={achievementIndex} className="flex items-start space-x-2 text-white/80 font-mono text-sm">
                                                <span className="text-purple-400 mt-1">•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="text-center pt-4">
                <p className="text-white/60 font-mono text-sm">
                    Continuous growth and learning in technology
                </p>
            </div>
        </div>
    );
}

export default ExperienceList;