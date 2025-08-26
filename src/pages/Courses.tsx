
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Users, Clock, CheckCircle, Send, Instagram, ArrowDown } from 'lucide-react';
import SEO from '../components/SEO';

const Courses = () => {
  const { t } = useTranslation();

  const courses = [
    {
      id: 1,
      title: 'HTML & CSS Fundamentals',
      description: 'Learn the building blocks of web development with semantic HTML and modern CSS techniques.',
      duration: '4 weeks',
      students: '4+',
      level: 'Beginner',
      topics: ['HTML5 Semantic Elements', 'CSS3 Flexbox & Grid', 'Responsive Design', 'CSS Animations']
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      description: 'Master modern JavaScript from basics to advanced concepts including ES6+ features.',
      duration: '8 weeks',
      students: '***',
      level: 'Intermediate',
      topics: ['ES6+ Features', 'DOM Manipulation', 'Async/Await', 'Object-Oriented Programming']
    },
    {
      id: 3,
      title: 'React Development',
      description: 'Build modern web applications with React, including hooks, state management, and routing.',
      duration: '10 weeks',
      students: '***',
      level: 'Advanced',
      topics: ['React Hooks', 'State Management', 'React Router', 'Testing with Jest']
    },
    {
      id: 4,
      title: 'Full Stack Development',
      description: 'Complete full-stack development course covering frontend and backend technologies.',
      duration: '16 weeks',
      students: '***',
      level: 'Expert',
      topics: ['Node.js & Express', 'Database Design', 'API Development', 'Deployment']
    }
  ];

  return (
    <>
      <SEO
        title="Frontend Courses - Nurmuhamad Narzulloev | Learn Web Development"
        description="Learn modern web development with comprehensive courses covering HTML, CSS, JavaScript, React, and full-stack development. Expert instruction and personalized learning."
        keywords="Frontend Courses, Web Development Training, React Course, JavaScript Course, HTML CSS Course, Nurmuhamad Narzulloev"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('courses.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {t('courses.subtitle')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
              {t('courses.description')}
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
              <ArrowDown className="h-5 w-5 animate-bounce" />
              <span className="text-sm font-medium">{t('courses.scrollMessage')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {course.description}
                </p>
                
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                    {course.level}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">{t('courses.process.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold">1</span>
                </div>
                <p className="text-lg">{t('courses.process.step1')}</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold">2</span>
                </div>
                <p className="text-lg">{t('courses.process.step2')}</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold">3</span>
                </div>
                <p className="text-lg">{t('courses.process.step3')}</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-xl font-semibold">{t('courses.contact')}</p>
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

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
