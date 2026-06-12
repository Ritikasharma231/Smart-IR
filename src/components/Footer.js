import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ShareIcon,
  ChatBubbleLeftIcon,
  BuildingOfficeIcon,
  CameraIcon,
  ArrowUpIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    support: [
      { name: 'Getting Started', href: '/signup', description: 'How to use the app' },
      { name: 'Assessment Guide', href: '/assessment-guide', description: 'Understanding assessments' },
      { name: 'FAQ', href: '/faq', description: 'Common questions' },
      { name: 'Contact Support', href: '/contact', description: 'Get help' }
    ]
  };

  const socialLinks = [
    { name: 'Share', href: '#share', icon: ShareIcon, label: 'Share our app' },
    { name: 'Chat', href: '#chat', icon: ChatBubbleLeftIcon, label: 'Live chat support' },
    { name: 'Company', href: '#company', icon: BuildingOfficeIcon, label: 'Company profile' },
    { name: 'Media', href: '#media', icon: CameraIcon, label: 'Media gallery' }
  ];

  const stats = [
    { number: '3', label: 'Assessments', color: 'text-blue-400' },
    { number: '94%', label: 'Accuracy Rate', color: 'text-green-400' },
    { number: '24/7', label: 'AI Support', color: 'text-purple-400' },
    { number: '20+', label: 'Health Indicators Analyzed', color: 'text-yellow-400' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    // Handle navigation or scroll to section
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For regular routes, scroll to top when navigating
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container-mfp py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <HeartIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Smart-IR Insulin Tracker</span>
                <p className="text-xs text-gray-400 mt-1">AI-Powered Health Monitoring</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Empowering individuals to take control of their insulin health through AI-powered assessments and personalized recommendations. Trusted by healthcare professionals worldwide.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3 text-center backdrop-blur-sm border border-gray-700/50">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-100">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 group block"
                  >
                    <span className="block group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    <span className="text-xs text-gray-500 block">{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-100">Email</p>
                <p className="text-gray-300 text-sm">support@smartir.com</p>
              </div>
            </div>
            
            <div className="flex items-center bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200">
              <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mr-4">
                <PhoneIcon className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-100">Phone</p>
                <p className="text-gray-300 text-sm">1800-102-5661</p>
              </div>
            </div>
            
            <div className="flex items-center bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 transition-colors duration-200">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                <MapPinIcon className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-100">Office</p>
                <p className="text-gray-300 text-sm">SGT University,Gurugram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950/50 backdrop-blur-sm">
        <div className="container-mfp py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Smart-IR Tracker. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ for your health journey
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={handleScrollToTop}
                className="flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800/30 rounded-full px-3 py-1 hover:bg-gray-700/50 border border-gray-700/50"
                title="Back to top"
              >
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
