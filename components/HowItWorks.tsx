import React from 'react';
import { MessageSquare, Code, Play, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const navigate = useNavigate()
  const steps = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Describe Your Vision",
      description: "Enter a text prompt describing the mathematical concept you want to animate.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "AI Generates Manim Code",
      description: "Our system automatically converts your description into optimized Manim code.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Preview & Refine",
      description: "Instantly see your animation and make adjustments until it's perfect.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Export High-Quality Video",
      description: "Download your animation as a professional MP4 video ready for your audience.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-400 uppercase tracking-wide">How It Works</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Simple Process, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Stunning Results</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Create professional animations in minutes with our streamlined workflow
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          {/* <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform -translate-y-1/2"></div> */}
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step number with gradient background */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-gradient-to-r ${step.color} p-0.5 relative z-10`}>
                  <div className="bg-gray-800 w-full h-full rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            onClick={() => navigate('/chats')}
            
            className="inline-flex cursor-pointer items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/20"
          >
            Try It Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;