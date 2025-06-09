import React from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection: React.FC = () => {
  const navigate = useNavigate()
  const features = [
    "No installation required",
    "Unlimited previews",
    "Full HD video export",
    "Custom branding options",
    "Regular updates & new features",
    "Priority support"
  ];

  return (
    <section id="try-now" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute blur-3xl opacity-30"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#7C3AED' : '#3B82F6',
              borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Educational Content?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Join thousands of educators and creators who are already using AnimaGraph to engage their audience.
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-4">Start for Free Today</h3>
              <p className="text-gray-300 mb-6">
                Create your first animation in minutes. No credit card required.
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                onClick={() => navigate('chats')}
                className="block cursor-pointer w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/20"
              >
                Get Started Free
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 md:p-10 flex flex-col justify-center">
              <div className="text-center">
                <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-200 mb-4">
                  Pro Plan
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Unlock All Features</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white">$19</span>
                  <span className="text-xl text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-300 mb-6">
                  Perfect for educators and content creators who need advanced features.
                </p>
                
                <a 
                  href="#pro-signup" 
                  className="flex items-center justify-center w-full px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-800/50 hover:bg-gray-800 transition-all duration-200"
                >
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Questions? Contact us at <a href="mailto:support@animagraph.io" className="text-blue-400 hover:text-blue-300">support@animagraph.io</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;