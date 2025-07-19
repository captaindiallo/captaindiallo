import React, { useState, useEffect } from 'react';
import { Plus, Loader, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Fallback FAQs (from original mock data)
const fallbackFaqs = [
  {
    id: 1,
    question: "What makes Jiba Mobile different from other financing options?",
    answer: "We offer 0% interest financing specifically designed for Africa's informal economy. Unlike traditional lenders, we understand the unique challenges of micro-businesses and provide flexible payment terms that work with your income."
  },
  {
    id: 2,
    question: "How do you determine my eligibility?",
    answer: "We use AI-powered assessment that looks beyond traditional credit scores. We consider your business activity, mobile money transactions, social connections, and earning potential to make fair decisions."
  },
  {
    id: 3,
    question: "What happens if my device gets stolen or damaged?",
    answer: "All our devices come with built-in protection coverage. If your device is stolen or damaged, we'll help you get a replacement quickly so your business doesn't suffer."
  },
  {
    id: 4,
    question: "Can I pay early without penalties?",
    answer: "Absolutely! You can pay off your device early at any time without any penalties or extra fees. We encourage early payments when possible."
  },
  {
    id: 5,
    question: "What support do you provide after I get my device?",
    answer: "We provide ongoing business training, technical support, and access to our network of merchants and partners to help you maximize your earning potential."
  },
  {
    id: 6,
    question: "Which countries do you currently serve?",
    answer: "We're currently active in Ghana and Côte d'Ivoire, with plans to expand to Senegal, Egypt, Ethiopia, DRC, Tanzania, Sudan, Algeria, and Madagascar in the coming months."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default
  const [faqs, setFaqs] = useState(fallbackFaqs);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch FAQs from backend
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(`${API}/faqs`);
        if (response.data && response.data.length > 0) {
          setFaqs(response.data);
          // Set first FAQ as open by default
          if (response.data.length > 0) {
            setOpenItems(new Set([response.data[0].id]));
          }
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load latest FAQs, showing cached content');
        // Keep fallback FAQs
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  if (isLoading) {
    return (
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex p-4 bg-orange-100 text-orange-600 rounded-full mb-4">
              <Loader className="animate-spin" size={32} />
            </div>
            <p className="text-gray-600">Loading frequently asked questions...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            about our device financing program.
          </p>
          {error && (
            <div className="mt-4 text-sm text-amber-600 bg-amber-50 rounded-lg px-4 py-2 inline-block flex items-center">
              <AlertCircle size={16} className="mr-2" />
              {error}
            </div>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(faq.id);
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className={`p-1 rounded-full transition-all duration-200 ${
                      isOpen 
                        ? 'bg-orange-600 text-white rotate-45' 
                        : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                    }`}>
                      <Plus size={16} />
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Get in touch and we'll answer any questions 
              about our device financing program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@jibamobile.com"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Email Us
              </a>
              <a 
                href="tel:2678057388"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;