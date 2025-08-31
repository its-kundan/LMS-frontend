import React from 'react';
import { FiAward, FiBookOpen, FiUsers } from 'react-icons/fi';

const InstructorDetails = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="text-center">
        {/* Instructor Image */}
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto relative">
            <img 
              src={data.image} 
              alt={data.name} 
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <FiAward className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Instructor Info */}
        <h3 className="text-xl font-display font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {data.name}
        </h3>
        
        <p className="text-sm text-primary-600 font-medium mb-3">
          {data.description}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {data.about}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="text-center">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <FiBookOpen className="w-4 h-4 text-primary-600" />
            </div>
            <div className="text-sm font-semibold text-gray-800">15+</div>
            <div className="text-xs text-gray-500">Courses</div>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <FiUsers className="w-4 h-4 text-accent-600" />
            </div>
            <div className="text-sm font-semibold text-gray-800">2K+</div>
            <div className="text-xs text-gray-500">Students</div>
          </div>
          
          <div className="text-center">
            <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <FiAward className="w-4 h-4 text-gold-600" />
            </div>
            <div className="text-sm font-semibold text-gray-800">4.9</div>
            <div className="text-xs text-gray-500">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
