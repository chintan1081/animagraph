import React from 'react';
import { 
  Sigma, 
  LineChart, 
  Compass, 
  PenTool, 
  Play, 
  Layout, 
  Sparkles, 
  Download 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sigma className="h-6 w-6 text-purple-400" />,
      title: "Mathematical Equations",
      description: "Transform complex LaTeX equations into beautiful, step-by-step animations that bring formulas to life."
    },
    {
      icon: <LineChart className="h-6 w-6 text-blue-400" />,
      title: "Dynamic Graphs & Charts",
      description: "Create smooth, animated visualizations of functions, data sets, and statistical concepts."
    },
    {
      icon: <Compass className="h-6 w-6 text-cyan-400" />,
      title: "Geometric Constructions",
      description: "Illustrate geometric principles with precise, vector-based animations that maintain quality at any scale."
    },
    {
      icon: <PenTool className="h-6 w-6 text-indigo-400" />,
      title: "Custom Styling",
      description: "Personalize your animations with custom colors, transitions, and text styling to match your brand."
    },
    {
      icon: <Play className="h-6 w-6 text-green-400" />,
      title: "One-Click Preview",
      description: "Instantly preview your animations and make adjustments in real-time before finalizing your video."
    },
    {
      icon: <Layout className="h-6 w-6 text-yellow-400" />,
      title: "Code-Free Interface",
      description: "No Python or Manim knowledge required. Our intuitive interface handles the complexity for you."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-red-400" />,
      title: "AI-Powered Suggestions",
      description: "Get intelligent recommendations to enhance your animations based on your content and objectives."
    },
    {
      icon: <Download className="h-6 w-6 text-orange-400" />,
      title: "High-Res Export",
      description: "Export publication-ready MP4 videos with crystal-clear resolution for any platform or purpose."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-purple-400 uppercase tracking-wide">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Everything you need to create
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              captivating mathematical animations
            </span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Transform complex concepts into clear, engaging visuals with our powerful yet simple tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
              <div className="relative flex flex-col h-full p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                <div className="p-3 rounded-full bg-gray-700/50 w-fit mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 flex-grow">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;