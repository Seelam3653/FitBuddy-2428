import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

const Dashboard = () => {
  const workoutData = {
    xAxis: {
      type: 'category',
      data: Array.from({ length: 7 }, (_, i) => 
        format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd')
      ).reverse()
    },
    yAxis: {
      type: 'value',
      name: 'Minutes'
    },
    series: [{
      data: [30, 45, 0, 60, 45, 0, 30],
      type: 'bar',
      itemStyle: {
        color: '#4F46E5'
      }
    }],
    tooltip: {
      trigger: 'axis'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Today's Goal</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">60 mins</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Weekly Progress</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">75%</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Calories Burned</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">450 kcal</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Activity</h2>
        <ReactECharts option={workoutData} style={{ height: '300px' }} />
      </div>
    </motion.div>
  );
};

export default Dashboard;