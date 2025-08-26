
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Code, Palette, Zap, Users, Star, Trophy } from 'lucide-react';
import SEO from '../components/SEO';
import imgmain from '../img/imgmain.png';
const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Code,
      title: t('home.features.development'),
      description: t('home.features.developmentDesc')
    },
    {
      icon: Palette,
      title: t('home.features.design'),
      description: t('home.features.designDesc')
    },
    {
      icon: Zap,
      title: t('home.features.performance'),
      description: t('home.features.performanceDesc')
    }
  ];

  const stats = [
    { number: '10+', label: t('home.stats.projects') },
    { number: '3+', label: t('home.stats.students') },
    { number: '5+', label: t('home.stats.experience') },
    { number: '80%', label: t('home.stats.satisfaction') }
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {t('home.title')}
                </h1>
                <h2 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-6 font-medium">
                  {t('home.subtitle')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {t('home.description')}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group"
                >
                  {t('home.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-2xl overflow-hidden">
                  <img
                    src={imgmain}
                    alt="Nurmuhamad Narzulloev"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-white dark:bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('home.features.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('home.features.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="bg-blue-600 dark:bg-blue-700 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="text-white">
          <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
          <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
   <p className="mt-6 text-white text-base sm:text-lg font-medium text-center dark:bg-blue-600 rounded-md px-4 py-2 ">
  {t('home.stats.right')}
</p>

  </div>
</div>

      </div>
    </>
  );
};

export default Home;
