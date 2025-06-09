import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Mathematics Professor",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "AnimaGraph has revolutionized how I teach complex mathematical concepts. My students' engagement has increased dramatically since I started using these animations in my lectures.",
      stars: 5
    },
    {
      name: "Alex Rivera",
      role: "Educational YouTuber",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "I used to spend days creating animations for my math channel. Now I can generate professional-quality visualizations in minutes. This tool has been a game-changer for my content.",
      stars: 5
    },
    {
      name: "Emily Watson",
      role: "High School Teacher",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "My students were struggling with calculus until I started using AnimaGraph to create visual explanations. The ability to show step-by-step processes has made all the difference.",
      stars: 4
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-cyan-400 uppercase tracking-wide">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">educators and creators</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            See how AnimaGraph is transforming mathematical education and content creation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 relative overflow-hidden group"
            >
              {/* Subtle gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-white">{testimonial.name}</h3>
                    <p className="text-cyan-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} mr-1`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;