import { useNavigate } from "react-router-dom";
import { BiSolidVideos } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";
import { FiClock, FiUser, FiStar } from "react-icons/fi";

function CourseCard({ data }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/course/description", { state: { ...data } })}
            className="group cursor-pointer"
        >
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Course Image */}
                <div className="relative overflow-hidden">
                    <img
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        src={data?.thumbnail?.secure_url}
                        alt="course thumbnail"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Premium Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="premium-badge">
                            Premium
                        </span>
                    </div>
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                        <FiStar className="w-4 h-4 text-gold-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">4.8</span>
                    </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                        <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                            {data?.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
                        {data?.title}
                    </h3>

                    {/* Instructor */}
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                            <FiUser className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">
                            {data?.createdBy}
                        </span>
                    </div>

                    {/* Course Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                                <BiSolidVideos className="w-4 h-4 text-primary-600" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-800">
                                    {data?.numberOfLectures}
                                </div>
                                <div className="text-xs text-gray-500">Lectures</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                                <FiClock className="w-4 h-4 text-accent-600" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-800">
                                    {Math.floor(Math.random() * 20) + 10}h
                                </div>
                                <div className="text-xs text-gray-500">Duration</div>
                            </div>
                        </div>
                    </div>

                    {/* Level Badge */}
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center">
                            <BsBarChart className="w-4 h-4 text-gold-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            Beginner to Advanced
                        </span>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                        <span>Explore Course</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;