import aboutMainImage from "../Assets/aboutMainImage.png";
import InstructorDetails from "../Components/InstructorDetails.jsx";
import { instructorData } from "../Constants/InstructorData.js";
import HomeLayout from "../Layouts/HomeLayout";
import { FiTarget, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function AboutUs() {
    const stats = [
        { icon: <FiUsers className="w-8 h-8" />, number: "10K+", label: "Students Enrolled" },
        { icon: <FiBookOpen className="w-8 h-8" />, number: "50+", label: "Premium Courses" },
        { icon: <FiAward className="w-8 h-8" />, number: "95%", label: "Success Rate" },
        { icon: <FiTarget className="w-8 h-8" />, number: "24/7", label: "Support Available" },
    ];

    return (
        <HomeLayout>
            {/* Hero Section */}
            <div className="relative py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-display font-bold">
                                <span className="gradient-text">Affordable</span>, Practical and Quality Education
                            </h1>
                            <p className="text-xl text-neutral-600 leading-relaxed">
                                Our goal is to provide affordable and quality education to the world. 
                                We are providing the platform for the aspiring teachers and students to share
                                their skills, creativity and knowledge to each other to empower and contribute
                                in the growth and wellness of mankind.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="btn-premium px-8 py-4 text-lg">
                                    Get Started
                                </button>
                                <button className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="relative z-10">
                                <img
                                    src={aboutMainImage}
                                    alt="About SkillRise"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-bg p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-neutral-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="relative py-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Our <span className="gradient-text">Mission</span>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            To democratize education by making high-quality learning accessible to everyone, 
                            regardless of their location or financial background.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="section-bg p-8 text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FiTarget className="w-8 h-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-display font-bold mb-4">Accessibility</h3>
                            <p className="text-neutral-600">
                                Making quality education accessible to learners worldwide through our innovative platform.
                            </p>
                        </div>
                        
                        <div className="section-bg p-8 text-center">
                            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FiUsers className="w-8 h-8 text-accent-600" />
                            </div>
                            <h3 className="text-xl font-display font-bold mb-4">Community</h3>
                            <p className="text-neutral-600">
                                Building a global community of learners and educators who support each other's growth.
                            </p>
                        </div>
                        
                        <div className="section-bg p-8 text-center">
                            <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FiAward className="w-8 h-8 text-gold-600" />
                            </div>
                            <h3 className="text-xl font-display font-bold mb-4">Excellence</h3>
                            <p className="text-neutral-600">
                                Maintaining the highest standards of educational content and learning outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instructors Section */}
            <div className="relative py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Meet Our <span className="gradient-text">Expert</span> Instructors
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Learn from industry professionals who are passionate about sharing their knowledge
                        </p>
                    </div>
                    
                    <div className="section-bg p-8">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="instructor-swiper"
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {instructorData.map((instructor, index) => (
                                <SwiperSlide key={index}>
                                    <div className="h-full">
                                        <InstructorDetails data={instructor} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default AboutUs;