import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsArrowUp } from 'react-icons/bs';
import { FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi';

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const socialLinks = [
        { icon: <BsFacebook className="w-5 h-5" />, href: 'https://github.com/pappukr034/', color: 'hover:bg-blue-600' },
        { icon: <BsInstagram className="w-5 h-5" />, href: 'https://www.instagram.com/_pappu_1108?igsh=MTJtMmpzdW51OTg5Ng==', color: 'hover:bg-pink-600' },
        { icon: <BsLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/pappu034/', color: 'hover:bg-blue-700' },
        { icon: <BsTwitterX className="w-5 h-5" />, href: 'https://www.youtube.com/', color: 'hover:bg-black' },
    ];

    const quickLinks = [
        { name: 'Courses', path: '/courses' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'FAQ', path: '/faq' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/TermsAndConditions' },
        { name: 'Refund Policy', path: '/RefundPolicy' },
    ];

    return (
        <>
            <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    S
                                </div>
                                <span className="text-2xl font-display font-bold gradient-text">
                                    SkillRise
                                </span>
                            </div>
                            <p className="text-neutral-300 mb-6 leading-relaxed">
                                Transform your future with our premium learning platform. Join thousands of learners who have already accelerated their careers with SkillRise.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300 transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-display font-bold mb-6 text-white">Quick Links</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.path}
                                            className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
                                        >
                                            <span className="w-1 h-1 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h3 className="text-xl font-display font-bold mb-6 text-white">Legal</h3>
                            <ul className="space-y-3">
                                {legalLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.path}
                                            className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
                                        >
                                            <span className="w-1 h-1 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-display font-bold mb-6 text-white">Contact Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <FiMail className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-400">Email</p>
                                        <a 
                                            href="mailto:pappukr034@gmail.com"
                                            className="text-neutral-300 hover:text-primary-400 transition-colors duration-300"
                                        >
                                            pappukr034@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <FiPhone className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-400">Phone</p>
                                        <span className="text-neutral-300">+91 7667384500</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                        <FiMapPin className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-400">Address</p>
                                        <span className="text-neutral-300">Vaishali, BIHAR</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-neutral-700 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-neutral-400 text-sm">
                                © {year} SkillRise. All rights reserved. Made with{' '}
                                <FiHeart className="inline w-4 h-4 text-red-500 fill-current" />
                                {' '}for learners worldwide.
                            </div>
                            <div className="flex items-center space-x-6 text-sm">
                                <Link to="/privacy-policy" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                                    Privacy
                                </Link>
                                <Link to="/TermsAndConditions" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                                    Terms
                                </Link>
                                <Link to="/RefundPolicy" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                                    Refund
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed z-50 bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                    >
                        <BsArrowUp className="w-6 h-6" />
                    </button>
                )}
            </footer>
        </>
    );
}

export default Footer;