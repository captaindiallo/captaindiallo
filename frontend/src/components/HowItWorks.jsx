import React from 'react';
import { Smartphone, CheckCircle, ShoppingCart, TrendingUp } from 'lucide-react';
import { howItWorksSteps } from '../mock/data';

const iconMap = {
  Smartphone,
  CheckCircle,
  ShoppingCart,
  TrendingUp
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-orange-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your smartphone or POS device in four simple steps. 
            No hidden fees, no complicated processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            return (
              <div key={step.id} className="relative group">
                {/* Connection line */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-orange-200 z-0">
                    <div className="h-full bg-gradient-to-r from-orange-400 to-orange-200 transform origin-left transition-transform duration-1000 group-hover:scale-x-110"></div>
                  </div>
                )}
                
                {/* Step card */}
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of entrepreneurs already growing their businesses with Jiba Mobile.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 inline-flex items-center group"
            >
              Apply Now
              <CheckCircle className="ml-2 group-hover:rotate-12 transition-transform duration-200" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;