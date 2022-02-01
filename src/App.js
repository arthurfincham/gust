import Welcome from './pages/Welcome';
import Navbar from './siteComponents/Navbar';
import Components from './pages/Components';
import Documentation from './pages/Documentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import useGoogleAnalytics from './utils/useGoogleAnalytics';

function GARoutes() {
  useGoogleAnalytics();
  const [subNavClosed, setSubNavClosed] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="App scroll-smooth">
      <Navbar />
      <main>
        <Routes>
          <Route key={1} path="/" element={<Welcome />} />
          <Route
            key={2}
            path="/components"
            element={
              <Components
                subNavClosed={subNavClosed}
                windowWidth={windowWidth}
                toggleSubNav={() => setSubNavClosed(!subNavClosed)}
              />
            }
          />
          <Route
            key={3}
            path="/documentation"
            element={
              <Documentation
                subNavClosed={subNavClosed}
                windowWidth={windowWidth}
                toggleSubNav={() => setSubNavClosed(!subNavClosed)}
              />
            }
          />
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
