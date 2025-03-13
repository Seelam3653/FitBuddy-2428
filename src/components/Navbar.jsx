import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaDumbbell, FaRunning, FaChartLine } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: FaHome, label: 'Dashboard' },
    { path: '/workouts', icon: FaDumbbell, label: 'Workouts' },
    { path: '/exercises', icon: FaRunning, label: 'Exercises' },
    { path: '/progress', icon: FaChartLine, label: 'Progress' }
  ];

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            GymTrainer
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 hover:text-indigo-200 transition-colors
                  ${location.pathname === path ? 'text-white font-semibold' : 'text-indigo-200'}`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;