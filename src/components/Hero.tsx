import React from 'react';
import { ChevronDown, Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      {/* Hero Image */}
      <div className="absolute top-20 right-10 hidden lg:block">
        <img 
          src="https://png.pngtree.com/png-vector/20190116/ourmid/pngtree-business-computer-it-person-business-person-png-image_388592.png"
          alt="Professional workspace"
          className="w-80 h-80 object-cover rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-3xl">
          {/* Animated Introduction */}
          <div className="animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Curriculum 
              <span className="gradient-text block">Vitae</span>
            </h1>
            
          </div>

          {/* CTA Buttons */}
          <div className="animate-fadeInUp flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-50"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="animate-fadeInUp flex justify-center lg:justify-start space-x-6 mb-12">
            <a 
              href="https://github.com/TranTrongNam28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a 
              href="mailto:trantrongnam02082001@gmail.com"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-emerald-600" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors" />
        </button>
      </div>

      <style >{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Hero;