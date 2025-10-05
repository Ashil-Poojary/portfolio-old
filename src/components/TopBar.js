import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUser, FiMail, FiCode, FiBook, FiBriefcase } from 'react-icons/fi';

function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navigationItems = [
        { name: 'Home', path: '/Home', icon: <FiHome size={18} /> },
        { name: 'About', path: '/Home', icon: <FiUser size={18} /> },
        { name: 'Experience', path: '/Home', icon: <FiBriefcase size={18} /> },
        { name: 'Education', path: '/Home', icon: <FiBook size={18} /> },
        { name: 'Projects', path: '/Home', icon: <FiCode size={18} /> },
        { name: 'Contact', path: '/Home', icon: <FiMail size={18} /> }
    ];

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const scrollToSection = (sectionName) => {
        if (location.pathname === '/Home') {
            // If we're on the dashboard, scroll to the section
            const element = document.getElementById(sectionName.toLowerCase());
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If we're on landing page, navigate to dashboard first
            navigate('/Home');
            setTimeout(() => {
                const element = document.getElementById(sectionName.toLowerCase());
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <button 
                            onClick={() => navigate('/')}
                            className="text-2xl font-bold text-white font-mono hover:text-purple-400 transition-colors duration-300"
                        >
                            Ashil<span className="text-purple-400">Poojary</span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.name)}
                                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-mono text-white/80 hover:text-purple-400 hover:bg-white/5 transition-all duration-300"
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scrollToSection('Contact')}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono text-sm rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:shadow-lg"
                        >
                            Let's Connect
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-purple-400 hover:bg-white/5 transition-all duration-300"
                        >
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-lg border-t border-white/10">
                        {navigationItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.name)}
                                className="flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-mono text-white/80 hover:text-purple-400 hover:bg-white/5 transition-all duration-300"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </button>
                        ))}
                        <div className="pt-4">
                            <button
                                onClick={() => scrollToSection('Contact')}
                                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono text-sm rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                            >
                                Let's Connect
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default TopBar;
