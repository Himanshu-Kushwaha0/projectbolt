import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, ThumbsDown, Tag, Search } from 'lucide-react';

const Forum = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for demonstration
  const discussions = [
    {
      id: 1,
      title: 'How to solve quadratic equations?',
      author: 'mathStudent',
      content: 'I\'m struggling with quadratic equations. Can someone explain the steps to solve them?',
      tags: ['mathematics', 'algebra'],
      upvotes: 15,
      downvotes: 2,
      replies: 8,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      title: 'Best resources for learning React?',
      author: 'webDev123',
      content: 'Looking for recommendations on the best resources to learn React from scratch.',
      tags: ['programming', 'react'],
      upvotes: 24,
      downvotes: 1,
      replies: 12,
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      title: 'Tips for effective study habits',
      author: 'studyPro',
      content: 'What are some effective study techniques that have worked for you?',
      tags: ['study-tips', 'productivity'],
      upvotes: 32,
      downvotes: 3,
      replies: 15,
      timestamp: '1 day ago'
    }
  ];

  const tags = [
    'all',
    'mathematics',
    'programming',
    'study-tips',
    'physics',
    'chemistry',
    'languages'
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

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || discussion.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Discussion Forum</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the conversation! Ask questions, share knowledge, and connect with fellow learners.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Tag className="h-4 w-4" />
                  <span>{tag}</span>
                </button>
              ))}
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Start New Discussion
            </button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {filteredDiscussions.map((discussion) => (
              <motion.div
                key={discussion.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">{discussion.title}</h3>
                    <p className="text-gray-600">{discussion.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {discussion.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 hover:text-blue-600">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{discussion.upvotes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-red-600">
                      <ThumbsDown className="h-4 w-4" />
                      <span>{discussion.downvotes}</span>
                    </button>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{discussion.replies} replies</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>Posted by {discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.timestamp}</span>
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

export default Forum;