import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, BookOpen, Video, FileText, Book, Code, Briefcase, Palette, Brain } from 'lucide-react';

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'academic', name: 'Academic', icon: Book, subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'History', 'Geography', 'Political Science', 'Economics', 'Literature'] },
    { id: 'competitive', name: 'Competitive Exams', icon: Brain, subjects: ['SAT', 'GRE', 'GMAT', 'CAT', 'JEE', 'NEET', 'UPSC', 'TOEFL'] },
    { id: 'professional', name: 'Professional Skills', icon: Briefcase, subjects: ['Coding', 'Data Analysis', 'Machine Learning', 'Digital Marketing', 'Graphic Design', 'Public Speaking'] },
    { id: 'creative', name: 'Creative Pursuits', icon: Palette, subjects: ['Photography', 'Writing', 'Music Theory', 'Painting', 'Film Studies'] },
    { id: 'life', name: 'Life Skills', icon: Brain, subjects: ['Time Management', 'Financial Literacy', 'Leadership', 'Effective Communication'] }
  ];

  const resourceTypes = [
    { id: 'notes', name: 'Study Notes', icon: FileText },
    { id: 'presentations', name: 'Presentations', icon: BookOpen },
    { id: 'videos', name: 'Video Tutorials', icon: Video },
    { id: 'tests', name: 'Mock Tests & Quizzes', icon: Brain },
    { id: 'projects', name: 'Projects & Assignments', icon: Code },
    { id: 'ebooks', name: 'E-Books & Articles', icon: Book }
  ];

  // Mock data for demonstration
  const resources = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      type: 'video',
      category: 'professional',
      subject: 'Machine Learning',
      description: 'A comprehensive introduction to machine learning concepts and algorithms.',
      thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400',
      downloads: 1234
    },
    {
      id: 2,
      title: 'Advanced Calculus Notes',
      type: 'notes',
      category: 'academic',
      subject: 'Mathematics',
      description: 'Detailed study notes covering advanced calculus topics with examples.',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400',
      downloads: 856
    },
    {
      id: 3,
      title: 'Digital Marketing Fundamentals',
      type: 'presentations',
      category: 'professional',
      subject: 'Digital Marketing',
      description: 'Comprehensive presentation on digital marketing basics and strategies.',
      thumbnail: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=400',
      downloads: 2341
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

  const getIconByType = (type: string) => {
    const resourceType = resourceTypes.find(rt => rt.id === type);
    const Icon = resourceType?.icon || FileText;
    return <Icon className="h-6 w-6 text-blue-500" />;
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Resource Library</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of educational resources across various subjects and formats.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Resource Type</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  {resourceTypes.map(type => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
                    {getIconByType(resource.type)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-blue-600">{resource.subject}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{resourceTypes.find(rt => rt.id === resource.type)?.name}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourceLibrary;