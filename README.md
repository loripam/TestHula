# TestHula - Sample React TypeScript Application

A sample React TypeScript application featuring a HelloWorld welcome page that serves as a reference implementation for developers building new pages.

## Overview

TestHula is a simple web application built with React and TypeScript, designed to demonstrate proper page structure, component patterns, and common conventions. The HelloWorld page serves as a template and reference for creating new pages in the application.

## Features

- ✨ Modern React 18 with TypeScript
- 🚀 Vite for fast development and building
- 🎨 Clean, responsive UI design
- 📱 Mobile-friendly layout
- 🧭 React Router for navigation
- 📚 Well-documented code with JSDoc comments

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/loripam/TestHula.git
   cd TestHula
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
TestHula/
├── public/              # Static assets
├── src/
│   ├── pages/          # Page components
│   │   ├── HelloWorld.tsx    # Sample HelloWorld page
│   │   └── HelloWorld.css    # HelloWorld page styles
│   ├── App.tsx         # Main app component with routing
│   ├── App.css         # Global app styles
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # This file
```

## Available Pages

### HelloWorld Welcome Page

**URL:** `/helloworld` (or `/` for homepage)

**Purpose:** A reference implementation that demonstrates:
- React functional component structure
- TypeScript type safety
- Proper JSDoc documentation
- Semantic HTML structure (header, main, footer)
- CSS styling patterns
- Inline code comments for educational purposes

**File Location:** `src/pages/HelloWorld.tsx`

This page serves as a template for creating new pages. Developers should use it as a starting point when building additional pages in the application.

## Creating New Pages

To create a new page in this application, follow these steps:

### 1. Create the Page Component

Create a new file in `src/pages/` (e.g., `src/pages/YourPage.tsx`):

```typescript
import React from 'react';
import './YourPage.css';

interface YourPageProps {
  // Define props here
}

const YourPage: React.FC<YourPageProps> = () => {
  return (
    <div className="your-page">
      <header className="page-header">
        <h1>Your Page Title</h1>
      </header>
      
      <main className="page-content">
        {/* Your content here */}
      </main>
      
      <footer className="page-footer">
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default YourPage;
```

### 2. Create the Stylesheet

Create a corresponding CSS file (e.g., `src/pages/YourPage.css`):

```css
.your-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Add your styles here */
```

### 3. Register the Route

Add the route in `src/App.tsx`:

```typescript
import YourPage from './pages/YourPage';

// In the Routes section:
<Route path="/yourpage" element={<YourPage />} />
```

### 4. Add Navigation Link (Optional)

Add a navigation link in `src/App.tsx`:

```typescript
<Link to="/yourpage" className="nav-link">Your Page</Link>
```

### 5. Test Your Page

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:5173/yourpage`
3. Verify the page displays correctly

## TypeScript Configuration

The project uses strict TypeScript configuration for type safety:

- Strict mode enabled
- No unused locals/parameters warnings
- ES2020 target with modern features
- React JSX transformation

Run type checking without building:

```bash
npm run type-check
```

## Code Conventions

### Component Structure

- Use functional components with React.FC
- Define TypeScript interfaces for props
- Add JSDoc comments for documentation
- Use semantic HTML elements
- Separate concerns (component file + CSS file)

### Naming Conventions

- Components: PascalCase (e.g., `HelloWorld.tsx`)
- CSS files: Match component name (e.g., `HelloWorld.css`)
- CSS classes: kebab-case (e.g., `page-header`)
- Props interfaces: ComponentNameProps (e.g., `HelloWorldProps`)

### Documentation

- Add JSDoc comments to components
- Include inline comments for complex logic
- Document prop interfaces
- Explain the purpose of each section

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

### Development Server

The development server runs on `http://localhost:5173` by default with:
- Hot module replacement (HMR)
- Fast refresh for React components
- TypeScript error reporting

## Browser Compatibility

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

When contributing to this project:

1. Follow the existing code structure and conventions
2. Use the HelloWorld page as a reference for page structure
3. Add proper TypeScript types
4. Include JSDoc documentation
5. Test your changes in the development server
6. Ensure TypeScript compilation passes (`npm run type-check`)

## License

This is a sample application for educational purposes.

## Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

---

**Note:** The HelloWorld page (`src/pages/HelloWorld.tsx`) is the primary reference implementation. Refer to it when creating new pages or learning the project structure.
