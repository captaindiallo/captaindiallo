import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold text-orange-400 mb-4">
                Jiba Mobile
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Empowering Africa's informal workers with interest-free device financing. 
                Join thousands of entrepreneurs already growing their businesses with 
                smartphones and POS devices.
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:hello@jibamobile.com"
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  <Mail size={16} className="mr-3" />
                  hello@jibamobile.com
                </a>
                <a 
                  href="tel:2678057388"
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  <Phone size={16} className="mr-3" />
                  +1 (267) 805-7388
                </a>
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="mr-3" />
                  Middletown, Delaware
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  Success Stories
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                >
                  FAQ
                </button>
              </div>
            </div>

            {/* Markets */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Markets We Serve</h3>
              <div className="space-y-2">
                <div className="text-orange-400 font-medium">Currently Active:</div>
                <div className="text-gray-300">🇬🇭 Ghana</div>
                <div className="text-gray-300">🇨🇮 Côte d'Ivoire</div>
                
                <div className="text-orange-400 font-medium mt-4">Coming Soon:</div>
                <div className="text-gray-400 text-sm">
                  Senegal, Egypt, Ethiopia, DRC, Tanzania, Sudan, Algeria, Madagascar
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of entrepreneurs across Africa who are already using 
              Jiba Mobile to grow their businesses.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors duration-200 inline-flex items-center group"
            >
              Get Started Today
              <ArrowUp className="ml-2 group-hover:-translate-y-1 transition-transform duration-200" size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Jiba Mobile Inc. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">
                Terms of Service
              </button>
              <button 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                title="Back to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;