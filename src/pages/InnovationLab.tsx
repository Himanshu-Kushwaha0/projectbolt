import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Calculator,
  Cloud,
  Brain,
  Settings,
  Users,
  Share2,
  Terminal,
  Database,
  ChevronRight,
  Play,
  Download,
  LineChart,
  Trophy,
  Layout
} from 'lucide-react';
import Editor from "@monaco-editor/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InnovationLab = () => {
  const [activeTab, setActiveTab] = useState('coding');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('// Start coding here\n');
  const [output, setOutput] = useState('');
  const chartRef = useRef(null);
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(31);
  const [storageUsage, setStorageUsage] = useState(30);

  // Function to run code
  const runCode = () => {
    try {
      // Create a safe environment for evaluation
      const safeEval = new Function('return ' + code);
      const result = safeEval();
      setOutput(String(result));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  // Simulated system metrics update
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 100));
      setMemoryUsage(Math.floor(Math.random() * 100));
      setStorageUsage(Math.floor(Math.random() * 100));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'CPU Usage',
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const tabs = [
    { id: 'coding', name: 'Coding Workspace', icon: Code },
    { id: 'scientific', name: 'Scientific Tools', icon: Calculator },
    { id: 'devops', name: 'DevOps Tools', icon: Cloud },
    { id: 'ai', name: 'AI/ML Lab', icon: Brain }
  ];

  const languages = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'java', name: 'Java' }
  ];

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Interactive Innovation Lab</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A cutting-edge virtual workspace for coding, scientific computing, and AI experimentation
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {activeTab === 'coding' && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <select
                          value={selectedLanguage}
                          onChange={(e) => setSelectedLanguage(e.target.value)}
                          className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
                        >
                          {languages.map(lang => (
                            <option key={lang.id} value={lang.id}>{lang.name}</option>
                          ))}
                        </select>
                        <button 
                          onClick={runCode}
                          className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700"
                        >
                          Run Code
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Share2 className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Settings className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="h-[400px]">
                    <Editor
                      height="100%"
                      defaultLanguage={selectedLanguage}
                      value={code}
                      onChange={handleEditorChange}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: true },
                        fontSize: 14,
                        automaticLayout: true,
                      }}
                    />
                  </div>
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Output:</h3>
                    <pre className="bg-gray-100 p-3 rounded-lg text-sm">{output}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'scientific' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <h3 className="text-lg font-semibold mb-4">Scientific Calculator</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
                          <button
                            key={btn}
                            className="p-3 text-center bg-gray-100 rounded-lg hover:bg-gray-200"
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Data Visualization</h3>
                      <div className="h-80">
                        <Line
                          ref={chartRef}
                          data={performanceData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                              y: {
                                beginAtZero: true
                              }
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'devops' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <Terminal className="h-6 w-6 text-blue-600" />
                        <h3 className="font-semibold">CI/CD Pipeline</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span className="text-sm">Build Status</span>
                          <span className="text-sm text-green-500">Passing</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span className="text-sm">Last Deployment</span>
                          <span className="text-sm">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <Database className="h-6 w-6 text-blue-600" />
                        <h3 className="font-semibold">Container Registry</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span className="text-sm">Active Containers</span>
                          <span className="text-sm">3</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span className="text-sm">Total Images</span>
                          <span className="text-sm">12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <Brain className="h-6 w-6 text-blue-600" />
                        <h3 className="font-semibold">Model Training</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Model
                          </label>
                          <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                            <option>Neural Network</option>
                            <option>Random Forest</option>
                            <option>SVM</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Dataset
                          </label>
                          <input
                            type="file"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                          />
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                          Start Training
                        </button>
                      </div>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <LineChart className="h-6 w-6 text-blue-600" />
                        <h3 className="font-semibold">Performance Metrics</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Accuracy</span>
                            <span className="text-sm font-medium">95%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }} />
                          </div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Precision</span>
                            <span className="text-sm font-medium">92%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">Configure Environment</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="flex items-center space-x-3">
                      <Download className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">Download SDK</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-700">Invite Team</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">CPU Usage</span>
                      <span className="text-gray-900">{cpuUsage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${cpuUsage}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Memory</span>
                      <span className="text-gray-900">{memoryUsage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${memoryUsage}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Storage</span>
                      <span className="text-gray-900">{storageUsage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${storageUsage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovationLab;