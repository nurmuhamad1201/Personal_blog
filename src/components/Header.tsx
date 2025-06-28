import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '@/img/logohorizontal.png';

// MUI components
import { IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'projects', path: '/projects' },
    { key: 'courses', path: '/courses' },
    { key: 'work', path: '/work' },
    { key: 'contact', path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'ru', name: 'RU' },
    { code: 'tj', name: 'TJ' },
  ];

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="inline-block p-5">
            <img src={logo} alt="Logo" className="h-20 object-cover w-52 mx-auto md:mx-0" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Language */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-2 w-16 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className="block w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-md last:rounded-b-md"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Burger Menu Icon for Mobile */}
            <div className="md:hidden">
              <IconButton onClick={toggleDrawer} size="large">
                <MenuIcon className="text-gray-700 dark:text-gray-300" />
              </IconButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <div className="w-64 h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col">
          <div className="flex justify-end p-4">
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
           {navItems.map((item) => (
  <ListItem
    key={item.key}
    disablePadding
    onClick={toggleDrawer}
  >
    <Link
      to={item.path}
      className={`w-full px-4 py-2 block ${
        isActive(item.path)
          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
          : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      {t(`nav.${item.key}`)}
    </Link>
  </ListItem>
))}

          </List>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
