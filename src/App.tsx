/**
 * Main App Component
 * 
 * This is the root component of the application that sets up routing
 * and the overall application structure.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HelloWorld from './pages/HelloWorld';
import './App.css';

/**
 * App Component
 * 
 * Sets up the application router and defines all available routes.
 * Add new routes here when creating new pages.
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <nav className="app-nav">
          <div className="nav-container">
            <Link to="/" className="nav-brand">TestHula</Link>
            <div className="nav-links">
              <Link to="/helloworld" className="nav-link">Hello World</Link>
            </div>
          </div>
        </nav>

        {/* Route Definitions */}
        <Routes>
          {/* Default route - redirects to HelloWorld */}
          <Route path="/" element={<HelloWorld />} />
          
          {/* HelloWorld page route */}
          <Route path="/helloworld" element={<HelloWorld />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
