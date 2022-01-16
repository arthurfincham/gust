import Welcome from './siteComponents/Welcome';
import Navbar from './siteComponents/Navbar';
import Components from './siteComponents/Components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isClosed, setIsClosed] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setIsClosed={setIsClosed} isClosed={isClosed} />
        <main>
          <Routes>
            <Route key={1} path="/" element={<Welcome />} />
            <Route key={2} path="/components" element={<Components isClosed={isClosed} windowWidth={windowWidth} setIsClosed={setIsClosed} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
