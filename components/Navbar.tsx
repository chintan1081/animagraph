import React, { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Play className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                AnimaGraph
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#examples" className="text-gray-300 hover:text-white transition-colors">
                Examples
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              <a 
                onClick={() => {
                navigate('/chats')
              }}
                className="bg-gradient-to-r cursor-pointer from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
              >
                Try Now
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#examples" 
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Examples
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a 
              // href="#try-now" 
              className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-md hover:from-purple-700 hover:to-blue-600"
              onClick={() => {
                navigate('/chats')
                setIsOpen(false)
              }}
            >
              Try Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;