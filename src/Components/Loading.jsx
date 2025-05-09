// src/LoadingSpinner.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center w-full  justify-center h-screen bg-slate-800">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loading;
