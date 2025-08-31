import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import { faqs } from '../Constants/Faq';
import Faq from '../Components/Faq';
import { FiHelpCircle, FiMessageCircle } from 'react-icons/fi';

function FaqPage() {
    return (
        <HomeLayout>
            {/* Hero Section */}
            <div className="relative py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <FiHelpCircle className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Find answers to common questions about our courses, platform, and services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* FAQ Section */}
                        <div className="space-y-6">
                            <div className="section-bg p-8">
                                <h2 className="text-2xl font-display font-bold mb-6 text-gray-800">
                                    Common Questions
                                </h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <Faq key={index} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Images Section */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                                        src="https://images.pexels.com/photos/6238038/pexels-photo-6238038.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Learning"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                                        src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Education"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </div>
                            
                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                                    src="https://images.pexels.com/photos/4343451/pexels-photo-4343451.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Students"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Support Section */}
            <div className="relative py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-bg p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <FiMessageCircle className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-display font-bold mb-4 text-gray-800">
                            Still have questions?
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                            Can't find the answer you're looking for? Please chat to our friendly team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-premium px-8 py-4 text-lg">
                                Contact Support
                            </button>
                            <button className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default FaqPage;
