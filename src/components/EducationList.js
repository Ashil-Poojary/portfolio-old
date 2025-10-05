import React from 'react';
import portfolioData from '../data/portfolioData.json';

function EducationList(props) {
    const { education } = portfolioData;

    return (
        <div className="space-y-8">
            {/* Education Timeline */}
            <div className="space-y-8">
                {education.map((edu, index) => (
                    <div 
                        key={index}
                        className="relative group"
                    >
                        {/* Timeline Line */}
                        {index < education.length - 1 && (
                            <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent opacity-30"></div>
                        )}
                        
                        {/* Education Card */}
                        <div className="relative p-6 border-l-2 border-purple-500/30 pl-8 hover:border-purple-500/60 transition-all duration-300">
                            {/* Timeline Dot */}
                            <div className="absolute -left-2 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white/20"></div>
                            
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-mono rounded-full border border-green-500/30">
                                    {edu.status}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-white font-mono mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                    {edu.course}
                                </h3>
                                
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-blue-300 font-mono font-semibold">{edu.years}</span>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span className="text-white/80 font-mono">{edu.college}</span>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-white/70 font-mono">{edu.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="text-center pt-4">
                <p className="text-white/60 font-mono text-sm">
                    Continuous learning and growth in technology
                </p>
            </div>
        </div>
    );
}

export default EducationList;