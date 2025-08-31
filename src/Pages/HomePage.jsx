import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { instructorData } from "../Constants/InstructorData.js";
import HomeLayout from "../Layouts/HomeLayout";
import InstructorDetails from "../Components/InstructorDetails.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../Redux/Slices/CourseSlice.js";
import CourseCard from "../Components/CourseCard.jsx";
import { FiArrowRight, FiPlay, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';

function HomePage() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { courseData } = useSelector((state) => state.course);

    async function loadCourses() {
        await dispatch(getAllCourses());
    }

    useEffect(() => {
        loadCourses();
    }, []);

    const stats = [
        { icon: <FiUsers className="w-8 h-8" />, number: "10K+", label: "Students Enrolled" },
        { icon: <FiBookOpen className="w-8 h-8" />, number: "50+", label: "Premium Courses" },
        { icon: <FiAward className="w-8 h-8" />, number: "95%", label: "Success Rate" },
    ];

    return (
        <HomeLayout>
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            <span className="gradient-text">Transform</span> Your Future
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Master the skills that matter with our premium learning platform. 
                            Join thousands of learners who have already transformed their careers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button 
                                onClick={() => navigate('/courses')} 
                                className="btn-premium text-lg px-8 py-4 flex items-center space-x-2 group"
                            >
                                <span>Explore Courses</span>
                                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button 
                                onClick={() => navigate('/about')} 
                                className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
                            >
                                <FiPlay className="w-5 h-5" />
                                <span>Learn More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-bg p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            {/* Featured Courses Section */}
            <div className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            <span className="gradient-text">Featured</span> Courses
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Discover our most popular courses designed to accelerate your learning journey
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courseData?.slice(0, 6).map((element) => (
                            <div key={element._id} className="animate-fade-in" style={{ animationDelay: `${element._id % 3 * 0.2}s` }}>
                                <CourseCard data={element} />
                            </div>
                        ))}
                    </div>
                    
                    {courseData?.length > 6 && (
                        <div className="text-center mt-12">
                            <button 
                                onClick={() => navigate('/courses')}
                                className="btn-premium text-lg px-8 py-4 flex items-center space-x-2 mx-auto group"
                            >
                                <span>View All Courses</span>
                                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    )}
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

            {/* CTA Section */}
            <div className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="section-bg p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Ready to <span className="gradient-text">Start Learning</span>?
                        </h2>
                        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                            Join thousands of learners who have already transformed their careers with SkillRise
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onClick={() => navigate('/signup')}
                                className="btn-premium text-lg px-8 py-4"
                            >
                                Get Started Today
                            </button>
                            <button 
                                onClick={() => navigate('/courses')}
                                className="px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
                            >
                                Browse Courses
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;