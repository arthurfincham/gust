import Welcome from './siteComponents/Welcome';
import Navbar from './siteComponents/Navbar';
import Components from './siteComponents/Components';
import Documentation from './siteComponents/Documentation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatedSwitch } from 'react-router-transition';

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
      <div className="App scroll-smooth">
        <Navbar setIsClosed={setIsClosed} isClosed={isClosed} />
        <main>
          <Switch>
            <Route key={1} exact path="/">
              <Welcome />
            </Route>
            <Route key={2} path="/components">
              <Components isClosed={isClosed} windowWidth={windowWidth} setIsClosed={setIsClosed} />
            </Route>
            <Route key={3} path="/documentation">
              <Documentation isClosed={isClosed} windowWidth={windowWidth} setIsClosed={setIsClosed} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
