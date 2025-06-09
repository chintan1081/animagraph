import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#2a2929] text-white">
      <div className="flex flex-col items-center space-y-6">
        <div className='flex gap-3'>
          <h2 className="bg-[#d4f4fd]  text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-transparent">
              Preparing Your
            </h2>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
              2D
            </h2>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-[#d4f4fd] bg-clip-text text-transparent">
              Animated Video...
            </h2>
        </div>
        <div className="w-14 h-14 border-4 border-fuchsia-400 border-dashed rounded-full animate-spin"></div>
        <p className="text-sm text-gray-300">This may take a few moments</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
