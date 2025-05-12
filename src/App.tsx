import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import ResourceLibrary from './pages/ResourceLibrary';
import ResourceUpload from './pages/ResourceUpload';
import Forum from './pages/Forum';
import Progress from './pages/Progress';
import VirtualHub from './pages/VirtualHub';
import InnovationLab from './pages/InnovationLab';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/resources" element={<ResourceLibrary />} />
            <Route path="/upload" element={<ResourceUpload />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/virtual-hub" element={<VirtualHub />} />
            <Route path="/innovation-lab" element={<InnovationLab />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;