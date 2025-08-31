import React, { useState, useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FiLogOut, FiUser, FiHome, FiBookOpen, FiUsers, FiPlus, FiMail, FiInfo } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { logout } from '../Redux/Slices/AuthSlice'

function NavBar() {
    const userData = useSelector(state => state?.auth?.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // for checking if user is logged in
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    // for displaying the options acc to role
    const role = useSelector((state) => state?.auth?.role);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    async function handleLogout(e) {
        e.preventDefault();
        const res = await dispatch(logout())
        if (res?.payload?.success)
            navigate("/");
    }

    const navItems = [
        { name: 'Home', path: '/', icon: <FiHome className="w-5 h-5" /> },
        { name: 'Courses', path: '/courses', icon: <FiBookOpen className="w-5 h-5" /> },
        { name: 'About', path: '/about', icon: <FiInfo className="w-5 h-5" /> },
        { name: 'Contact', path: '/contact', icon: <FiMail className="w-5 h-5" /> },
    ];

    const adminItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: <FiUsers className="w-5 h-5" /> },
        { name: 'Create Course', path: '/course/create', icon: <FiPlus className="w-5 h-5" /> },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'nav-modern' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                S
                            </div>
                            <span className="text-2xl font-display font-bold gradient-text hidden sm:block">
                                SkillRise
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-center space-x-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 group"
                            >
                                <span className="group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </span>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                        
                        {isLoggedIn && role === 'ADMIN' && adminItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-center space-x-2 text-neutral-700 hover:text-accent-600 font-medium transition-colors duration-300 group"
                            >
                                <span className="group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </span>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* User Menu & Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        {/* User Avatar/Profile */}
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-3">
                                <div className="relative group">
                                    {userData?.avatar?.secure_url ? (
                                        <img
                                            onClick={() => navigate('/user/profile')}
                                            src={userData.avatar.secure_url}
                                            alt="Profile"
                                            className="w-10 h-10 rounded-full cursor-pointer border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div
                                            onClick={() => navigate('/user/profile')}
                                            className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-300"
                                        >
                                            <FiUser className="w-5 h-5" />
                                        </div>
                                    )}
                                    
                                    {/* Dropdown Menu */}
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                                        <div className="py-2">
                                            <Link
                                                to="/user/profile"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                <FiUser className="w-4 h-4 mr-3" />
                                                Profile
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                                            >
                                                <FiLogOut className="w-4 h-4 mr-3" />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3">
                                <Link
                                    to="/login"
                                    className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="btn-premium"
                                >
                                    Get Started
                                </Link>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors duration-300"
                        >
                            {isMenuOpen ? (
                                <AiFillCloseCircle className="w-6 h-6 text-neutral-700" />
                            ) : (
                                <HiMenuAlt3 className="w-6 h-6 text-neutral-700" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden glass border-t border-white/20">
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center space-x-3 text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                        
                        {isLoggedIn && role === 'ADMIN' && (
                            <div className="border-t border-white/20 pt-4 mt-4">
                                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Admin</p>
                                {adminItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center space-x-3 text-neutral-700 hover:text-accent-600 font-medium transition-colors duration-300 py-2"
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                        
                        {isLoggedIn && (
                            <div className="border-t border-white/20 pt-4 mt-4">
                                <button
                                    onClick={(e) => {
                                        handleLogout(e);
                                        setIsMenuOpen(false);
                                    }}
                                    className="flex items-center space-x-3 text-red-600 hover:text-red-700 font-medium transition-colors duration-300 py-2 w-full"
                                >
                                    <FiLogOut className="w-5 h-5" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar
