// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Generate } from './pages/Generate';
import { GenerateMore } from './pages/GenerateMore';


// Layout component to maintain consistent background across all pages
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-purple-50">
      {children}
    </div>
  );
};

const App = () => {
  return (
    // Router: Enables routing functionality for the entire app
    <Router>
      {/* Layout: Wraps all routes to maintain consistent styling */}
      <Layout>
        {/* Routes: Container for all route definitions */}
        <Routes>
          {/* Individual Route definitions */}
          <Route path="/" element={<Generate />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/generate/more" element={<GenerateMore />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;