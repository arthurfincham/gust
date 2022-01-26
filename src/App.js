import Welcome from './siteComponents/Welcome';
import Navbar from './siteComponents/Navbar';
import Components from './siteComponents/Components';
import Documentation from './siteComponents/Documentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useGoogleAnalytics from './utils/useGoogleAnalytics';

function GARoutes() {
  useGoogleAnalytics();
  const [isClosed, setIsClosed] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="App scroll-smooth">
      <Navbar setIsClosed={setIsClosed} isClosed={isClosed} />
      <main>
        <Routes>
          <Route key={1} path="/" element={<Welcome />} />
          <Route key={2} path="/components" element={<Components isClosed={isClosed} windowWidth={windowWidth} setIsClosed={setIsClosed} />} />
          <Route key={3} path="/documentation" element={<Documentation isClosed={isClosed} windowWidth={windowWidth} setIsClosed={setIsClosed} />} />
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
