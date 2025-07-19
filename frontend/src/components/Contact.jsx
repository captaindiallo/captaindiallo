import React, { useState } from 'react';
import { Send, User, Phone, Mail, Briefcase, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { countries, businessTypes } from '../mock/data';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    country: '',
    business_type: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [successData, setSuccessData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await axios.post(`${API}/leads`, {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        business_type: formData.business_type,
        message: formData.message
      });

      setSuccessData(response.data);
      setIsSubmitted(true);
      
      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setSuccessData(null);
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          country: '',
          business_type: '',
          message: ''
        });
      }, 5000);
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(
        err.response?.data?.detail || 
        'Failed to submit application. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.full_name && formData.email && formData.phone && formData.country && formData.business_type;

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-green-50 rounded-2xl p-12">
            <div className="inline-flex p-4 bg-green-100 text-green-600 rounded-full mb-6">
              <CheckCircle size={48} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h3>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              {successData?.message || "Thank you for your interest in Jiba Mobile. Our team will review your application and contact you within 24 hours to discuss next steps."}
            </p>
            <div className="text-sm text-gray-500 mb-4">
              Application ID: {successData?.id}
            </div>
            <div className="text-sm text-gray-500">
              You should receive a confirmation email shortly at {formData.email}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Device <span className="text-orange-600">Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join thousands of entrepreneurs growing their businesses? 
            Fill out the form below and we'll get you started with interest-free device financing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Apply for Device Financing
            </h3>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle className="text-red-500 mr-3 mt-0.5" size={20} />
                <div>
                  <p className="text-red-800 font-medium">Application Error</p>
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your phone number"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-2" />
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Briefcase size={16} className="inline mr-2" />
                  Business Type *
                </label>
                <select
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select your business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your business (optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe your business and how a smartphone/POS device would help you grow..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center ${
                  isFormValid && !isSubmitting
                    ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="ml-3" size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Jiba Mobile?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">0% Interest Rate</h4>
                    <p className="text-gray-600">No hidden fees or interest charges</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Approval</h4>
                    <p className="text-gray-600">Get approved in minutes, not days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Device Protection</h4>
                    <p className="text-gray-600">Built-in insurance included</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Need Help?</h4>
              <p className="text-orange-100 mb-6">
                Our team is standing by to help you get started with device financing.
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:hello@jibamobile.com" 
                  className="flex items-center text-orange-100 hover:text-white transition-colors"
                >
                  <Mail size={16} className="mr-3" />
                  hello@jibamobile.com
                </a>
                <a 
                  href="tel:2678057388" 
                  className="flex items-center text-orange-100 hover:text-white transition-colors"
                >
                  <Phone size={16} className="mr-3" />
                  +1 (267) 805-7388
                </a>
                <div className="flex items-center text-orange-100">
                  <MapPin size={16} className="mr-3" />
                  Middletown, Delaware
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;