import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import DemoSection from './DemoSection';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import Footer from './Footer';

const floatKeyframes = `
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}
`;

function LandingPage() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = floatKeyframes;
    document.head.appendChild(style);
    
    document.title = "AnimaGraph - Transform Text into Beautiful Mathematical Animations";
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DemoSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default LandingPage;