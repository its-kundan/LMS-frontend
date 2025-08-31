import { useState } from "react";
import { toast } from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

import axiosInstance from "../Helpers/axiosInstance";
import { isEmail } from "../Helpers/regexMatcher";
import HomeLayout from "../Layouts/HomeLayout";
import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.email || !userInput.name || !userInput.message) {
            toast.error("All fields are mandatory");
            return;
        }

        if (!isEmail(userInput.email)) {
            toast.error("Invalid email");
            return;
        }

        setIsLoading(true);
        try {
            const response = axiosInstance.post("/contact", userInput);
            toast.promise(response, {
                loading: "Submitting your message...",
                success: "Form submitted successfully",
                error: "Failed to submit the form"
            });
            const contactResponse = await response;
            if (contactResponse?.data?.success) {
                setUserInput({
                    name: "",
                    email: "",
                    message: "",
                });
                navigate('/');
            }
        } catch (err) {
            toast.error("Operation failed");
        } finally {
            setIsLoading(false);
        }
    }

    const contactInfo = [
        {
            icon: <FiMail className="w-6 h-6" />,
            title: "Email",
            details: "kundan51kk@gmail.com",
            link: "mailto:kundan51kk@gmail.com"
        },
        {
            icon: <FiPhone className="w-6 h-6" />,
            title: "Phone",
            details: "+91 766 788 6894",
            link: "tel:+917667886894"
        },
        {
            icon: <FiMapPin className="w-6 h-6" />,
            title: "Location",
            details: "Gurugram, India",
            link: "#"
        }
    ];

    return (
        <HomeLayout>
            {/* Hero Section */}
            <div className="relative py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="section-bg p-8">
                                <h2 className="text-2xl font-display font-bold mb-6 text-gray-800">
                                    Let's talk about everything
                                </h2>
                                <p className="text-neutral-600 mb-8 leading-relaxed">
                                    Don't like forms? Send us an email directly. We'll get back to you as soon as possible.
                                </p>
                                
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                    {info.title}
                                                </h3>
                                                <a
                                                    href={info.link}
                                                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-300"
                                                >
                                                    {info.details}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1687533704681-dda0f700c108?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Contact Us"
                                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="section-bg p-8">
                            <h2 className="text-2xl font-display font-bold mb-6 text-gray-800">
                                Send us a message
                            </h2>
                            
                            <form onSubmit={onFormSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your full name"
                                            onChange={handleInputChange}
                                            value={userInput.name}
                                            className="input-modern pl-10 w-full"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiMail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email address"
                                            onChange={handleInputChange}
                                            value={userInput.email}
                                            className="input-modern pl-10 w-full"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                            <FiMessageSquare className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            placeholder="Tell us about your inquiry..."
                                            onChange={handleInputChange}
                                            value={userInput.message}
                                            className="input-modern pl-10 w-full resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="btn-premium w-full flex items-center justify-center space-x-2 py-4 text-lg"
                                >
                                    {isLoading ? (
                                        <div className="spinner w-5 h-5"></div>
                                    ) : (
                                        <>
                                            <FiSend className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default Contact;