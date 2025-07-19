import React from 'react';
import { ArrowRight, Smartphone, CreditCard } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium">🇬🇭 🇨🇮 Now serving Ghana & Côte d'Ivoire</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Interest-Free
            <br />
            <span className="text-yellow-300">Device Financing</span>
            <br />
            for Africa
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering informal workers and micro-businesses with smartphones and POS devices 
            to earn, connect, and grow in the digital economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center group shadow-lg"
            >
              Get Your Device Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-200">
              Learn How It Works
            </button>
          </div>

          {/* Device showcase */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex flex-col items-center group">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl mb-4 group-hover:bg-white/30 transition-all duration-300">
                <Smartphone size={48} />
              </div>
              <span className="text-sm font-medium">Smartphones</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl mb-4 group-hover:bg-white/30 transition-all duration-300">
                <CreditCard size={48} />
              </div>
              <span className="text-sm font-medium">POS Devices</span>
            </div>
          </div>

          {/* Markets served */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-sm text-orange-200 mb-3">Expanding across Africa:</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['Ghana', 'Côte d\'Ivoire', 'Senegal', 'Egypt', 'Ethiopia', 'DRC', 'Tanzania', 'Sudan', 'Algeria', 'Madagascar'].map((country, index) => (
                <span key={index} className="bg-white/20 px-3 py-1 rounded-full">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C120,90 240,30 360,60 C480,90 600,30 720,60 C840,90 960,30 1080,60 C1140,75 1200,60 1200,60 L1200,120 L0,120 Z" 
                fill="white" fillOpacity="1"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;