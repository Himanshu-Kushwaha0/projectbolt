import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Your One-Stop Solution for Learning Resources
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              variants={itemVariants}
            >
              Access high-quality study materials, connect with peers, and track your progress
            </motion.p>
            <motion.div 
              className="space-x-4"
              variants={itemVariants}
            >
              <Link 
                to="/resources" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                Explore Resources
              </Link>
              <Link 
                to="/auth" 
                className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Sign Up
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Extensive Library</h3>
              <p className="text-gray-600">Access thousands of curated study materials across various subjects and levels.</p>
            </motion.div>

            <motion.div 
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
              <p className="text-gray-600">Connect with peers and educators in our interactive Q&A forum.</p>
            </motion.div>

            <motion.div 
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">Monitor your learning journey with our intuitive progress tracking system.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            Ready to Start Learning?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            variants={itemVariants}
          >
            Join thousands of students and educators on our platform
          </motion.p>
          <motion.div
            variants={itemVariants}
          >
            <Link 
              to="/auth" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;