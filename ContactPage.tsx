import React, { useState } from 'react';
import { MessageSquare, Mail, Send, Instagram } from 'lucide-react';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/201020626936`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    const instagramUrl = `https://instagram.com/gamersland.eg`;
    window.open(instagramUrl, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Contact from GEMARS LAND Website';
    const mailtoUrl = `mailto:gamersland.eg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for any questions or support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">gamersland.eg@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">WhatsApp</h4>
                    <p className="text-gray-300">01020626936</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Instagram size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Instagram</h4>
                    <p className="text-gray-300">gamersland.eg</p>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={24} />
                  <span>Contact via WhatsApp</span>
                </button>

                <button
                  onClick={handleInstagramClick}
                  className="w-full mt-4 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center space-x-2"
                >
                  <Instagram size={24} />
                  <span>Follow on Instagram</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
              <h4 className="text-white font-bold text-lg mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Saturday - Tuesday:</span>
                  <span>9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday - Friday:</span>
                  <span>11:00 AM - 12:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
            
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  <Mail className="inline w-5 h-5 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center space-x-2"
              >
                <Send size={24} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;