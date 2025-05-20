import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Clock,
  Calendar,
  CheckCircle,
  Circle,
  AlertCircle,
  Plus,
  ChevronRight,
  Award,
  Target,
  TrendingUp,
  Bell
} from 'lucide-react';

const Progress = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for demonstration
  const overallProgress = 68;
  const subjects = [
    { id: 1, name: 'Mathematics', progress: 75, color: 'bg-blue-500' },
    { id: 2, name: 'Physics', progress: 60, color: 'bg-green-500' },
    { id: 3, name: 'Programming', progress: 85, color: 'bg-purple-500' }
  ];

  const tasks = [
    {
      id: 1,
      title: 'Complete Calculus Chapter 3',
      subject: 'Mathematics',
      deadline: '2024-03-20',
      priority: 'high',
      status: 'in_progress',
      progress: 60
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      subject: 'Physics',
      deadline: '2024-03-18',
      priority: 'medium',
      status: 'pending',
      progress: 30
    },
    {
      id: 3,
      title: 'React Project',
      subject: 'Programming',
      deadline: '2024-03-25',
      priority: 'high',
      status: 'completed',
      progress: 100
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'deadline',
      message: 'Physics Lab Report due in 2 days',
      timestamp: '1 hour ago'
    },
    {
      id: 2,
      type: 'achievement',
      message: 'Completed 5 tasks this week!',
      timestamp: '2 hours ago'
    }
  ];

  const insights = [
    {
      id: 1,
      title: 'Weekly Progress',
      value: '+15%',
      trend: 'up',
      description: 'Improvement from last week'
    },
    {
      id: 2,
      title: 'Tasks Completed',
      value: '12',
      trend: 'up',
      description: 'This month'
    },
    {
      id: 3,
      title: 'Study Streak',
      value: '5 days',
      trend: 'neutral',
      description: 'Keep it up!'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in_progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <Circle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500 bg-red-50';
      case 'medium':
        return 'text-yellow-500 bg-yellow-50';
      default:
        return 'text-green-500 bg-green-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Progress Tracker</h1>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              <Plus className="h-5 w-5" />
              <span>Add New Task</span>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-4 border-b border-gray-200">
            {['overview', 'tasks', 'insights'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Overall Progress */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Overall Progress</h2>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {overallProgress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${overallProgress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {subjects.map((subject) => (
                  <div key={subject.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{subject.name}</span>
                      <span className="text-sm text-gray-500">{subject.progress}%</span>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${subject.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${subject.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Bell className="h-5 w-5 mr-2 text-blue-600" />
                Notifications
              </h2>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    {notification.type === 'deadline' ? (
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Award className="h-5 w-5 text-green-500" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">{notification.message}</p>
                      <span className="text-xs text-gray-500">{notification.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tasks List */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Current Tasks</h2>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(task.status)}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{task.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-500">{task.subject}</span>
                          <span className="text-gray-300">•</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-xs text-gray-500">{task.deadline}</span>
                        </div>
                        <div className="mt-1 text-xs font-medium text-gray-700">
                          {task.progress}% Complete
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Insights */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Insights
              </h2>
              <div className="space-y-4">
                {insights.map((insight) => (
                  <div
                    key={insight.id}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-700">{insight.title}</h3>
                      <span className={`text-sm font-semibold ${
                        insight.trend === 'up' ? 'text-green-500' : 'text-blue-500'
                      }`}>
                        {insight.value}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">{insight.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Progress;