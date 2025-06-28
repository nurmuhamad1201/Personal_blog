
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Github, Instagram, Send, Home, FolderOpen, BookOpen, Briefcase, Mail } from 'lucide-react';
import logo from '@/img/logo.png'
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
                       
  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/nurmuhamad1201',
      icon: Send,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/nurmuhamad1201',
      icon: Instagram,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/nurmuhamad1201',
      icon: Github,
    },
  ];

  const navigationLinks = [
    { name: t('nav.home'), path: '/', icon: Home },
    { name: t('nav.projects'), path: '/projects', icon: FolderOpen },
    { name: t('nav.courses'), path: '/courses', icon: BookOpen },
    { name: t('nav.work'), path: '/work', icon: Briefcase },
    { name: t('nav.contact'), path: '/contact', icon: Mail },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-24 object-cover  w-52 mx-auto md:mx-0"
                
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('footer.developer')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &#169; {currentYear} {t('footer.rights')}
            </p>
          </div>

          {/* Navigation Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.navigation')}
            </h4>
            <nav className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

         
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.connect')}
            </h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
