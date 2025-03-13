import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';

const exercises = [
  {
    id: 1,
    name: 'Push-ups',
    category: 'Strength',
    muscle: 'Chest',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    name: 'Squats',
    category: 'Strength',
    muscle: 'Legs',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800'
  },
  {
    id: 3,
    name: 'Deadlifts',
    category: 'Strength',
    muscle: 'Back',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800'
  }
];

const Exercises = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Exercise Library</h1>
        <div className="flex space-x-4">
          <input
            type="search"
            placeholder="Search exercises..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All Categories</option>
            <option value="strength">Strength</option>
            <option value="cardio">Cardio</option>
            <option value="flexibility">Flexibility</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <motion.div
            key={exercise.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{exercise.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">{exercise.category}</span>
                <span className="text-sm text-gray-500">{exercise.muscle}</span>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                <FaInfoCircle className="mr-2" />
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Exercises;