/**
 * Main Entry Point
 * 
 * This file initializes the React application and mounts it to the DOM.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Create the React root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
