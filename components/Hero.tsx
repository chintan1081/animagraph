import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, PenTool, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const navigate = useNavigate()
  const animations = [
    '∫_{0}^{∞} e^{-x^2} dx = \\frac{\\sqrt{π}}{2}',
    'f(x) = \\frac{1}{1 + e^{-x}}',
    'E = mc^2',
    '\\nabla \\times E = -\\frac{∂B}{∂t}'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6 space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-900/50 text-purple-200">
                <Zap className="w-4 h-4 mr-1" />
                Revolutionary Animation Tool
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              Turn Text into Mathematical Animations{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Effortlessly
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Create stunning, educational animations in minutes without coding experience. Perfect for educators, creators, and students.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                 onClick={() => {
                navigate('/chats')
              }}
                className="inline-flex cursor-pointer items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/20"
              >
                Try for Free <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-200 bg-gray-800/50 hover:bg-gray-800 transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex items-center">
                <Code className="h-5 w-5 text-purple-400 mr-2" />
                <span className="text-gray-300">No coding required</span>
              </div>
              <div className="flex items-center">
                <PenTool className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">Pro-quality results</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-xl"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-400 text-sm">AnimaGraph</div>
              </div>
              
              <div className="h-64 flex items-center justify-center">
                <div 
                  className="text-3xl text-white font-mono transition-all duration-500 transform"
                  style={{ opacity: 1 }}
                >
                  {animations[currentAnimation]}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-400">
                  Input your idea, get beautiful animations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;