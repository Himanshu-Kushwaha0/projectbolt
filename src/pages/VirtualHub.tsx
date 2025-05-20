import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Smartphone,
  Cloud,
  Terminal,
  Code,
  Video,
  Database,
  Cpu,
  Settings,
  Users,
  ChevronRight,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const VirtualHub = () => {
  const [activeTab, setActiveTab] = useState('emulators');
  const [selectedEmulator, setSelectedEmulator] = useState('pc');

  const tabs = [
    { id: 'emulators', name: 'Emulators', icon: Monitor },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'ai', name: 'AI Tools', icon: Cpu },
    { id: 'quantum', name: 'Quantum Lab', icon: Database }
  ];

  const emulators = [
    {
      id: 'windows',
      name: 'Windows',
      type: 'pc',
      icon: Monitor,
      description: 'Windows 11 development environment'
    },
    {
      id: 'linux',
      name: 'Linux',
      type: 'pc',
      icon: Terminal,
      description: 'Ubuntu 22.04 LTS environment'
    },
    {
      id: 'android',
      name: 'Android',
      type: 'mobile',
      icon: Smartphone,
      description: 'Latest Android SDK environment'
    },
    {
      id: 'ios',
      name: 'iOS',
      type: 'mobile',
      icon: Smartphone,
      description: 'iOS simulator environment'
    }
  ];

  const cloudServices = [
    {
      id: 'aws',
      name: 'AWS',
      icon: Cloud,
      services: ['EC2', 'S3', 'Lambda', 'RDS']
    },
    {
      id: 'azure',
      name: 'Azure',
      icon: Cloud,
      services: ['VM', 'Blob Storage', 'Functions']
    },
    {
      id: 'gcp',
      name: 'Google Cloud',
      icon: Cloud,
      services: ['Compute Engine', 'Cloud Storage', 'BigQuery']
    }
  ];

  const aiTools = [
    {
      id: 'text',
      name: 'AI Text Generator',
      icon: Code,
      description: 'Generate essays, code, and creative content'
    },
    {
      id: 'video',
      name: 'AI Video Creator',
      icon: Video,
      description: 'Create custom videos using text prompts'
    }
  ];

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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Virtual Interactive Hub</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access powerful development environments, cloud services, and AI tools in one place
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
              {activeTab === 'emulators' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex space-x-4 mb-6">
                    <button
                      onClick={() => setSelectedEmulator('pc')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                        selectedEmulator === 'pc'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Monitor className="h-5 w-5" />
                      <span>PC Emulators</span>
                    </button>
                    <button
                      onClick={() => setSelectedEmulator('mobile')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                        selectedEmulator === 'mobile'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Smartphone className="h-5 w-5" />
                      <span>Mobile Emulators</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {emulators
                      .filter((em) => em.type === selectedEmulator)
                      .map((emulator) => (
                        <motion.div
                          key={emulator.id}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-100 rounded-lg">
                                <emulator.icon className="h-6 w-6 text-blue-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">{emulator.name}</h3>
                                <p className="text-sm text-gray-500">{emulator.description}</p>
                              </div>
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                              <Play className="h-5 w-5 text-blue-600" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              )}

              {activeTab === 'cloud' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cloudServices.map((service) => (
                      <motion.div
                        key={service.id}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <service.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        </div>
                        <div className="space-y-2">
                          {service.services.map((s) => (
                            <div
                              key={s}
                              className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                            >
                              <span className="text-sm text-gray-600">{s}</span>
                              <ExternalLink className="h-4 w-4 text-gray-400" />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aiTools.map((tool) => (
                      <motion.div
                        key={tool.id}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <tool.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                              <p className="text-sm text-gray-500">{tool.description}</p>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-full">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'quantum' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="text-center py-8">
                    <Cpu className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Quantum Computing Lab
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Experience quantum computing with our simulation environment
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Launch Quantum Lab
                    </button>
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
                      <span className="text-gray-900">45%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '45%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Memory</span>
                      <span className="text-gray-900">2.5GB / 8GB</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '31%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Storage</span>
                      <span className="text-gray-900">156GB / 512GB</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '30%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 border-t border-gray-200 pt-6">
          <p>Himanshu Kushwaha</p>
          <p>Contact: 7999916500</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualHub;