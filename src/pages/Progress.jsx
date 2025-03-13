import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const Progress = () => {
  const weightData = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value',
      name: 'Weight (kg)'
    },
    series: [{
      data: [75, 74, 73, 72, 71, 70],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#4F46E5',
        width: 3
      },
      symbol: 'circle',
      symbolSize: 8
    }],
    tooltip: {
      trigger: 'axis'
    }
  };

  const strengthData = {
    radar: {
      indicator: [
        { name: 'Chest', max: 100 },
        { name: 'Back', max: 100 },
        { name: 'Legs', max: 100 },
        { name: 'Shoulders', max: 100 },
        { name: 'Arms', max: 100 }
      ]
    },
    series: [{
      type: 'radar',
      data: [{
        value: [80, 75, 85, 70, 65],
        name: 'Strength Progress',
        areaStyle: {
          color: 'rgba(79, 70, 229, 0.2)'
        },
        lineStyle: {
          color: '#4F46E5'
        }
      }]
    }]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-gray-800">Progress Tracking</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Weight Progress</h2>
          <ReactECharts option={weightData} style={{ height: '300px' }} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Strength Analysis</h2>
          <ReactECharts option={strengthData} style={{ height: '300px' }} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Achievements</h2>
        <div className="space-y-4">
          {[
            { title: 'Weight Goal Reached', date: '2024-03-15', description: 'Lost 5kg in 6 months' },
            { title: 'New PR: Deadlift', date: '2024-03-10', description: '120kg × 5 reps' },
            { title: 'Workout Streak', date: '2024-03-05', description: '30 days consecutive training' }
          ].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                <p className="text-sm text-gray-500">{achievement.description}</p>
              </div>
              <span className="text-sm text-gray-500">{achievement.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Progress;