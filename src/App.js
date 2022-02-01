import Welcome from './pages/Welcome';
import Navbar from './siteComponents/Navbar';
import Components from './pages/Components';
import Documentation from './pages/Documentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import useGoogleAnalytics from './utils/useGoogleAnalytics';

function GARoutes() {
  useGoogleAnalytics();

  return (
    <div className="App scroll-smooth">
      <Navbar />
      <main>
        <Routes>
          <Route key={1} path="/" element={<Welcome />} />
          <Route key={2} path="/components" element={<Components />} />
          <Route key={3} path="/documentation" element={<Documentation />} />
        </Routes>
      </main>
    </div>
  );
}
function App() {
  return (
    <Router>
      <GARoutes />
    </Router>
  );
}

export default App;
