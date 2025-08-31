import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch, FiBookOpen, FiUsers } from 'react-icons/fi';

import CourseCard from "../../Components/CourseCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourses, getSearchedCourse } from "../../Redux/Slices/CourseSlice";
import InstructorDetails from "../../Components/InstructorDetails";
import { instructorData } from "../../Constants/InstructorData";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { faqs } from "../../Constants/Faq";
import Faq from "../../Components/Faq";
import toast from "react-hot-toast";

function CourseList() {
    const dispatch = useDispatch();
    const { courseData } = useSelector((state) => state.course);
    const [query, setQuery] = useState('');
    const [searchData, setsearchData] = useState([]);

    async function loadCourses() {
        await dispatch(getAllCourses());
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query === "") {
            toast.error("Query is required");
            return;
        }
        const response = await dispatch(getSearchedCourse(query));
        setsearchData(response.courses);
        setQuery("");
    }

    useEffect(() => {
        loadCourses();
    }, []);

    const displayData = searchData.length > 0 ? searchData : courseData;

    return (
        <HomeLayout>
            {/* Hero Section */}
            <div className="relative py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Explore <span className="gradient-text">Premium</span> Courses
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Discover courses created by industry experts to accelerate your learning journey
                        </p>
                    </div>

                    {/* Search Section */}
                    <div className="section-bg p-6 mb-12">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-center">
                            <div className="relative flex-1 w-full">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiSearch className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search courses..."
                                    className="input-modern pl-10 w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn-premium px-8 py-3 whitespace-nowrap"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayData?.map((element) => (
                            <div key={element._id} className="animate-fade-in">
                                <CourseCard data={element} />
                            </div>
                        ))}
                    </div>

                    {displayData?.length === 0 && (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiBookOpen className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
                            <p className="text-gray-600">Try adjusting your search terms or browse all courses.</p>
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

            {/* FAQ Section */}
            <div className="relative py-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Find answers to common questions about our courses and platform
                        </p>
                    </div>
                    
                    <div className="section-bg p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {faqs.map((faq, index) => (
                                <Faq key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseList;