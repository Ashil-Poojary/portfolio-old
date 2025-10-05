import React from 'react';
import {ImWhatsapp} from "react-icons/im";
import {FiPhoneCall,FiTwitter} from "react-icons/fi";
import {MdEmail} from "react-icons/md";
import {BsLinkedin,BsGithub} from "react-icons/bs";
import portfolioData from '../data/portfolioData.json';

function ContactMe(props) {
    const { contactInfo: contactData } = portfolioData;

    function whatsAppFunction() {
        const whatsappLink = contactData.socialLinks.find(link => link.platform === 'WhatsApp');
        if (whatsappLink) {
            window.open(whatsappLink.url);
        }
    }

    function emailFunction() {
        window.open(`mailto:${contactData.email}?subject=${encodeURIComponent('Hey Ashil  ')}`);
    }

    const contactInfo = [
        { icon: <MdEmail className="text-purple-400" size={20} />, label: "Email", value: contactData.email, action: emailFunction },
        { icon: <FiPhoneCall className="text-purple-400" size={20} />, label: "Phone", value: contactData.phone, action: () => window.open(`tel:${contactData.phone.replace(/\D/g, '')}`) },
        { icon: <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: "Website", value: contactData.website, action: () => window.open(`https://${contactData.website}`) }
    ];

    const socialLinks = contactData.socialLinks.map(social => {
        const iconMap = {
            'BsGithub': <BsGithub size={24} />,
            'BsLinkedin': <BsLinkedin size={24} />,
            'FiTwitter': <FiTwitter size={24} />,
            'ImWhatsapp': <ImWhatsapp size={24} />
        };

        return {
            icon: iconMap[social.icon],
            label: social.platform,
            url: social.url,
            color: social.color,
            action: social.isAction ? whatsAppFunction : null
        };
    });

    return (
        <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
                {contactInfo.map((item, index) => (
                    <div 
                        key={item.label}
                        className={`group flex items-center space-x-4 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer`}
                        onClick={item.action}
                    >
                        <div className="flex-shrink-0">
                            {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-mono text-purple-400 font-semibold">{item.label}</p>
                            <p className="text-white/80 font-mono text-sm truncate">{item.value}</p>
                        </div>
                        {item.action && (
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
                <h3 className="text-lg font-bold text-white font-mono text-center">
                    Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                        <div
                            key={social.label}
                            className={`group flex flex-col items-center space-y-2 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer ${social.color}`}
                            onClick={social.url ? () => window.open(social.url) : social.action}
                        >
                            <div className="text-white group-hover:scale-110 transition-transform duration-300">
                                {social.icon}
                            </div>
                            <span className="text-xs font-mono text-white/70 group-hover:text-white transition-colors duration-300">
                                {social.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-4">
                <p className="text-white/60 font-mono text-sm">
                    Let's build something amazing together!
                </p>
            </div>
        </div>
    );
}

export default ContactMe;