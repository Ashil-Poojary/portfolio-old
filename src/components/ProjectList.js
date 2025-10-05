import React, { useState } from 'react';
import portfolioData from '../data/portfolioData.json';

function ProjectList(props) {
    const [imageErrors, setImageErrors] = useState({});
    const { projects, statusColors } = portfolioData;

    const getStatusColor = (status) => {
        return statusColors[status] || statusColors.default || "bg-gray-500/20 text-gray-400 border-gray-500/30";
    };

    const handleImageError = (projectIndex, imageType) => {
        setImageErrors(prev => ({
            ...prev,
            [`${projectIndex}-${imageType}`]: true
        }));
    };

    return (
        <div className="space-y-6">
            {/* Projects Grid */}
            <div className="space-y-6">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className="group relative p-6 border-l-2 border-purple-500/30 pl-8 hover:border-purple-500/60 transition-all duration-300"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 text-xs font-mono rounded-full border ${getStatusColor(project.status)}`}>
                                {project.status}
                            </span>
            </div>

                        {/* Project Content */}
                        <div className="space-y-4">
                            {/* Project Header with Client Logo */}
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white font-mono mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    
                                    <div className="flex items-center space-x-4 text-sm text-blue-300 font-mono mb-3">
                                        <span className="flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                            </svg>
                                            <span>{project.role}</span>
                                        </span>
                                        <span className="text-white/50">•</span>
                                        <span className="flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>{project.timeline}</span>
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Client Logo */}
                                {project.client && project.client.logo && !imageErrors[`${index}-client`] && (
                                    <div className="ml-4 flex-shrink-0">
                                        <img 
                                            src={project.client.logo} 
                                            alt={`${project.client.name} logo`}
                                            className="w-12 h-12 object-contain rounded-lg border border-white/10"
                                            onError={() => handleImageError(index, 'client')}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Project Image */}
                            {project.image && !imageErrors[`${index}-project`] && (
                                <div className="mb-4">
                                    <img 
                                        src={project.image} 
                                        alt={`${project.title} screenshot`}
                                        className="w-full h-48 object-cover rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                                        onError={() => handleImageError(index, 'project')}
                                    />
                                </div>
                            )}

                            {/* Client Name */}
                            {project.client && project.client.name && (
                                <div className="flex items-center space-x-2 text-sm text-purple-400 font-mono">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span>Client: {project.client.name}</span>
                                </div>
                            )}

                            <p className="text-white/80 font-mono text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-mono text-white/80 border border-white/20 hover:bg-purple-500/20 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-3 pt-2">
                                {project.link && (
                                    <button
                                        className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono text-sm rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                                        onClick={() => window.open(project.link)}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span>Live Demo</span>
                                    </button>
                                )}
                                
                                {project.code && (
                                    <button
                                        className="group flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-mono text-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                                        onClick={() => window.open(project.code)}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        <span>Source Code</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="text-center pt-4">
                <p className="text-white/60 font-mono text-sm">
                    More projects coming soon...
                </p>
            </div>
        </div>
    );
}

export default ProjectList;