import React, { useState } from 'react';
import { Code, Check } from 'lucide-react';

const DemoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'code'>('prompt');
  
  const promptExample = "Create an animation of a sine wave being formed by tracking a point around a circle, then show the relationship between the circle and the wave.";
  
  const codeExample = `
from manim import *

class SineWaveFromCircle(Scene):
    def construct(self):
        # Create circle and dot
        circle = Circle(radius=1, color=BLUE)
        dot = Dot(color=RED)
        dot.move_to(circle.point_at_angle(0))
        
        # Add elements to scene
        self.play(Create(circle))
        self.play(Create(dot))
        
        # Create path and moving dot
        path = VMobject(color=YELLOW)
        path.set_points_as_corners([dot.get_center(), dot.get_center()])
        self.add(path)
        
        # Animation
        def update_path(path):
            previous_path = path.copy()
            previous_path.add_points_as_corners([dot.get_center()])
            path.become(previous_path)
            
        path.add_updater(update_path)
        
        # Rotate dot around circle
        self.play(
            Rotating(dot, about_point=ORIGIN, radians=2*PI, run_time=5),
        )
        
        self.wait()
  `;

  return (
    <section id="examples" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-400 uppercase tracking-wide">See It In Action</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Simplify Complex Concepts</span> with Animation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Convert text prompts or code into beautiful mathematical visualizations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl">
              <div className="flex border-b border-gray-700">
                <button
                  className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === 'prompt' ? 'bg-purple-900/30 text-purple-300' : 'text-gray-400 hover:text-gray-300'}`}
                  onClick={() => setActiveTab('prompt')}
                >
                  Text Prompt
                </button>
                <button
                  className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === 'code' ? 'bg-blue-900/30 text-blue-300' : 'text-gray-400 hover:text-gray-300'}`}
                  onClick={() => setActiveTab('code')}
                >
                  Python Code
                </button>
              </div>
              
              <div className="p-4">
                {activeTab === 'prompt' ? (
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 h-64 overflow-auto">
                    {promptExample}
                    <div className="mt-4 flex items-center text-green-400">
                      <Check className="w-5 h-5 mr-2" />
                      <span>Prompt processed successfully</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 h-64 overflow-auto">
                    <pre>{codeExample}</pre>
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-gray-800 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    <Code className="inline-block w-4 h-4 mr-1" />
                    <span>AnimaGraph {activeTab === 'prompt' ? 'AI-generated' : 'User-written'} code</span>
                  </div>
                  <button className="text-xs px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Animation preview mockup */}
            <div className="aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-xl bg-black relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                  alt="Sine wave animation example" 
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white font-medium">Sine Wave from Circle Animation</p>
                <p className="text-gray-300 text-sm">Generated in 8.2 seconds</p>
              </div>
            </div>
            
            {/* Controls underneath */}
            <div className="mt-4 flex justify-between">
              <button className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                Edit Animation
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white hover:from-purple-700 hover:to-blue-700 transition-colors">
                Download MP4
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;