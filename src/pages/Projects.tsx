
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, ArrowDown, Instagram, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: 'Horizon Olympiad',
      description: `Horizon Olympiad is a global competition from the USA for students (Grades 3–12) in Math, Coding, Science, Robotics, Art, and Film.`,
      image: 'https://th.bing.com/th/id/OIP.2UHafwFwqrP1XG0qDL6_nQHaEK?w=310&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
      liveUrl: 'https://www.horizonolympiad.org/',
      codeUrl: '/404',
      tech: ['PHP', 'Laravel', 'Tailwind CSS', 'Swiper.js' , 'JavaScript']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      liveUrl: '#',
      codeUrl: '#',
      tech: ['React', 'Redux', 'Firebase', 'Material-UI']
    },
  
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Weather application with location-based forecasts and data visualization',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      liveUrl: '#',
      codeUrl: '#',
      tech: ['React', 'Chart.js', 'Weather API', 'CSS3']
    },
    
  ];

  return (
    <>
      <SEO
        title="Projects - Nurmuhamad Narzulloev | Frontend Developer Portfolio"
        description="Explore my portfolio of modern web applications and websites built with React, JavaScript, and cutting-edge technologies."
        keywords="Frontend Projects, React Applications, JavaScript Projects, Web Development Portfolio, Nurmuhamad Narzulloev"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {t('projects.subtitle')}
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
              <ArrowDown className="h-5 w-5 animate-bounce" />
              <span className="text-sm font-medium">{t('projects.scrollDown')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t('projects.viewLive')}
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t('projects.viewCode')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
 
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">{t('projects.cta.title')}</h2>
            <p className="text-lg mb-6">{t('projects.cta.description')}</p>


                <div className="space-y-4 mb-6">
                            
                            <div className="flex justify-center space-x-4">
                              <a
                                href="https://t.me/nurmuhamad1201"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                              >
                                <Send className="h-5 w-5 mr-2" />
                                Telegram
                              </a>
                              <a
                                href="https://instagram.com/nurmuhamad1201"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                              >
                                <Instagram className="h-5 w-5 mr-2" />
                                Instagram
                              </a>
                            </div>
                          </div>


            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <ArrowDown className="h-5 w-5 animate-bounce" />
              <span className="font-medium">{t('projects.cta.scrollDown')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
