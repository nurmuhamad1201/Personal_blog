
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Instagram, Github, Mail, MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Send,
      name: 'Telegram',
      value: '@nurmuhamad1201',
      url: 'https://t.me/nurmuhamad1201',
      color: 'text-blue-500'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      value: '@nurmuhamad1201',
      url: 'https://instagram.com/nurmuhamad1201',
      color: 'text-pink-500'
    },
    {
      icon: Github,
      name: 'GitHub',
      value: 'github.com/nurmuhamad1201',
      url: 'https://github.com/nurmuhamad1201',
      color: 'text-gray-700 dark:text-gray-300'
    },
    {
      icon: Mail,
      name: 'Email',
      value: 'nurmuhamad.dev@gmail.com',
      url: 'mailto:nurmuhamad.dev@gmail.com',
      color: 'text-red-500'
    }
  ];

  return (
    <>
      <SEO
        title="Contact - Nurmuhamad Narzulloev | Get In Touch"
        description="Contact Nurmuhamad Narzulloev for frontend development services, courses, or collaboration opportunities. Available on Telegram, Instagram, and email."
        keywords="Contact Nurmuhamad Narzulloev, Frontend Developer Contact, Telegram, Instagram, GitHub"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 group"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${method.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors duration-200`}>
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {method.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Additional Information
                  </h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                      <span>Dushanbe, Tajikistan</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-gray-400" />
                      <span>Available for remote work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Let's Work Together</h2>
                <p className="text-lg mb-8 opacity-90">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a complete website, want to learn frontend development, 
                  or just want to say hello, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Frontend Development Services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>React & JavaScript Consulting</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Web Development Courses</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Code Review & Mentoring</span>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-lg font-semibold mb-4">Preferred Contact Methods:</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://t.me/nurmuhamad1201"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors duration-200"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Telegram
                    </a>
                    <a
                      href="https://instagram.com/nurmuhamad1201"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors duration-200"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('contact.social')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Stay updated with my latest projects, tutorials, and insights about web development.
                </p>
                <div className="flex space-x-4">
                  {contactMethods.slice(0, 3).map((method, index) => (
                    <a
                      key={index}
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
                    >
                      <method.icon className={`h-5 w-5 ${method.color}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
