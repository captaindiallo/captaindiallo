import React from 'react';
import { Target, Heart, Globe, Users, Lightbulb, Award } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Empowerment First",
      description: "We believe in empowering people, not exploiting them. Every decision we make puts our customers' success first."
    },
    {
      icon: Globe,
      title: "Africa-Focused",
      description: "Built by Africans for Africans. We understand the unique challenges and opportunities in our markets."
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Using cutting-edge technology and AI to make financial services more accessible and fair."
    }
  ];

  const achievements = [
    { icon: Users, stat: "50,000+", label: "Lives Impacted" },
    { icon: Award, stat: "99.2%", label: "Repayment Rate" },
    { icon: Target, stat: "10", label: "Countries Targeted" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">Jiba Mobile</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to democratize access to digital tools that power economic growth 
            across Africa's informal economy.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in Middletown, Delaware, Jiba Mobile was born from a simple observation: 
                Africa's most enterprising people were being left behind by traditional financial systems.
              </p>
              <p>
                Street vendors, taxi drivers, food sellers, and countless other micro-entrepreneurs 
                needed smartphones and POS devices to compete in the digital economy, but couldn't 
                access fair financing options.
              </p>
              <p>
                Today, we're proud to be pioneering interest-free device financing that puts 
                people over profits, creating real opportunities for Africa's informal workers 
                to thrive in the digital age.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Our Impact</h4>
              <div className="grid grid-cols-1 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                          <IconComponent size={24} />
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{achievement.stat}</div>
                        <div className="text-gray-600">{achievement.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="inline-flex p-4 bg-orange-100 text-orange-600 rounded-full mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-orange-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Get in Touch
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Have questions about our mission or want to partner with us? 
            We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a href="mailto:hello@jibamobile.com" className="hover:text-orange-200 transition-colors">
              hello@jibamobile.com
            </a>
            <span className="hidden sm:block text-orange-300">•</span>
            <a href="tel:2678057388" className="hover:text-orange-200 transition-colors">
              +1 (267) 805-7388
            </a>
            <span className="hidden sm:block text-orange-300">•</span>
            <span className="text-orange-200">Middletown, Delaware</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;