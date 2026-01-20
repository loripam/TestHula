/**
 * HelloWorld Welcome Page Component
 * 
 * This is a sample/reference page component that demonstrates the structure
 * and patterns used for creating pages in this application. New developers
 * should use this as a template when creating additional pages.
 * 
 * Key Patterns Demonstrated:
 * - React functional component with TypeScript
 * - JSDoc documentation for component purpose
 * - Proper component structure with semantic HTML
 * - Basic page layout (header, main content, footer)
 * - Inline comments explaining sections
 * - TypeScript interface for props (even if empty)
 * 
 * @returns {JSX.Element} The rendered welcome page
 */

import React from 'react';
import './HelloWorld.css';

/**
 * Props interface for HelloWorld component
 * 
 * Currently empty but demonstrates TypeScript typing pattern.
 * Add props here as needed for your pages.
 */
interface HelloWorldProps {
  // Add props here as needed
}

/**
 * HelloWorld Page Component
 * 
 * A simple welcome page that serves as a reference implementation
 * for creating new pages in this application.
 */
const HelloWorld: React.FC<HelloWorldProps> = () => {
  return (
    <div className="hello-world-page">
      {/* Header Section - Page title and introduction */}
      <header className="page-header">
        <h1>Welcome to TestHula</h1>
        <p className="subtitle">A Sample React TypeScript Application</p>
      </header>

      {/* Main Content Section - Primary page content */}
      <main className="page-content">
        <section className="welcome-section">
          <h2>Hello, World!</h2>
          <p>
            This is a sample welcome page that demonstrates the basic structure
            and patterns used in this application. It serves as a reference for
            developers creating new pages.
          </p>
        </section>

        <section className="info-section">
          <h3>Page Structure Overview</h3>
          <p>This page demonstrates:</p>
          <ul>
            <li>React functional component with TypeScript</li>
            <li>Proper JSDoc documentation</li>
            <li>Semantic HTML structure (header, main, footer)</li>
            <li>TypeScript interfaces for type safety</li>
            <li>CSS styling with separate stylesheet</li>
            <li>Inline comments explaining key sections</li>
          </ul>
        </section>

        <section className="navigation-section">
          <h3>Getting Started</h3>
          <p>
            To create a new page similar to this one:
          </p>
          <ol>
            <li>Create a new file in <code>src/pages/</code></li>
            <li>Copy this component structure as a starting point</li>
            <li>Update the component name and content</li>
            <li>Add a route in <code>App.tsx</code></li>
            <li>Create corresponding CSS file for styling</li>
          </ol>
        </section>
      </main>

      {/* Footer Section - Page footer with metadata */}
      <footer className="page-footer">
        <p>TestHula Sample Application &copy; 2026</p>
        <p className="footer-note">
          This is a reference implementation for page structure
        </p>
      </footer>
    </div>
  );
};

export default HelloWorld;
