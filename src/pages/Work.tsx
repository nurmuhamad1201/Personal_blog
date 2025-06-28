
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Palette, Smartphone, Zap, Send, Instagram } from 'lucide-react';
import SEO from '../components/SEO';

const Work = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Palette,
      title: t('work.services.ui'),
      description: 'Creating beautiful, intuitive user interfaces with modern design principles and best practices.',
      features: ['Modern UI/UX Design', 'Component Libraries', 'Design Systems', 'Prototyping']
    },
    {
      icon: Code,
      title: t('work.services.frontend'),
      description: 'Building robust frontend applications with clean, maintainable code and scalable architecture.',
      features: ['React Development', 'State Management', 'Performance Optimization', 'Code Review']
    },
    {
      icon: Zap,
      title: t('work.services.js'),
      description: 'Implementing complex JavaScript solutions, animations, and interactive features.',
      features: ['ES6+ JavaScript', 'API Integration', 'Custom Animations', 'Performance Tuning']
    },
    {
      icon: Smartphone,
      title: t('work.services.responsive'),
      description: 'Ensuring your website looks perfect on all devices with responsive design techniques.',
      features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'Performance Optimization', 'Accessibility']
    }
  ];

  return (
    <>
      <SEO
        title="Work With Me - Nurmuhamad Narzulloev | Frontend Development Services"
        description="Hire a professional frontend developer for UI design, React development, JavaScript solutions, and responsive web applications. Quality work guaranteed."
        keywords="Freelance Frontend Developer, React Developer for Hire, JavaScript Developer, UI/UX Developer, Nurmuhamad Narzulloev"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('work.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('work.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                    <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              {t('work.cta')}
            </p>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://t.me/nurmuhamad1201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                <Send className="h-5 w-5 mr-2" />
                Contact on Telegram
              </a>
              <a
                href="https://instagram.com/nurmuhamad1201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Contact on Instagram
              </a>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Why Choose Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">5+</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Years Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">Professional frontend development experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Projects Completed</h4>
                <p className="text-gray-600 dark:text-gray-300">Successfully delivered projects of all sizes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Client Satisfaction</h4>
                <p className="text-gray-600 dark:text-gray-300">Committed to delivering quality results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
