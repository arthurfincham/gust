import Welcome from './siteComponents/Welcome';
import Navbar from './siteComponents/Navbar';
import Components from './siteComponents/Components';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useRouteMatch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route key={1} path="/" element={<Welcome />} />
            <Route key={2} path="/components" element={<Components />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
