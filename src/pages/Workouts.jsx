import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaClock, FaFire } from 'react-icons/fa';

const workouts = [
  {
    id: 1,
    title: 'Full Body Strength',
    duration: '45 min',
    calories: '400 kcal',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    title: 'HIIT Cardio',
    duration: '30 min',
    calories: '300 kcal',
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=800'
  },
  {
    id: 3,
    title: 'Core Strength',
    duration: '20 min',
    calories: '200 kcal',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800'
  }
];

const Workouts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Workouts</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Create Workout
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <motion.div
            key={workout.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={workout.image}
                alt={workout.title}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors">
                <FaPlay />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{workout.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{workout.difficulty}</p>
              <div className="flex items-center mt-4 space-x-4">
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2" />
                  {workout.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaFire className="mr-2" />
                  {workout.calories}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Workouts;