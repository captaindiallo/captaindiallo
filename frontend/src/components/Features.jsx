import React from 'react';
import { 
  Percent, Calendar, Zap, Shield, TrendingUp, Network,
  ArrowRight 
} from 'lucide-react';
import { features } from '../mock/data';

const iconMap = {
  Percent,
  Calendar,
  Zap,
  Shield,
  TrendingUp,
  Network
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-orange-600">Jiba Mobile?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just financing devices – we're empowering Africa's digital transformation 
            with fair, accessible, and supportive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id} 
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-orange-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-orange-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-orange-100 text-orange-600 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={32} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="text-orange-600" size={20} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                10,000+
              </div>
              <div className="text-orange-200">
                Devices Financed
              </div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-orange-200">
                Customer Satisfaction
              </div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="text-orange-200">
                Countries & Growing
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">
              Powering Africa's Digital Future
            </h3>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Every device we finance creates new opportunities, new connections, 
              and new possibilities for entrepreneurs across Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;