import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, User, Monitor, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="bg-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">StudyHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Resources</Link>
            <Link to="/forum" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Forum</Link>
            <Link to="/upload" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Upload</Link>
            <Link to="/progress" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Progress</Link>
            <Link to="/virtual-hub" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md flex items-center">
              <Monitor className="h-4 w-4 mr-1" />
              <span>Virtual Hub</span>
            </Link>
            <Link to="/innovation-lab" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md flex items-center">
              <Code className="h-4 w-4 mr-1" />
              <span>Innovation Lab</span>
            </Link>
            <Link to="/auth" className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/resources" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Resources</Link>
              <Link to="/forum" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Forum</Link>
              <Link to="/upload" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Upload</Link>
              <Link to="/progress" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Progress</Link>
              <Link to="/virtual-hub" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md flex items-center">
                <Monitor className="h-4 w-4 mr-1" />
                <span>Virtual Hub</span>
              </Link>
              <Link to="/innovation-lab" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md flex items-center">
                <Code className="h-4 w-4 mr-1" />
                <span>Innovation Lab</span>
              </Link>
              <Link to="/auth" className="block bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">Sign In</Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;