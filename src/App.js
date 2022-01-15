import Welcome from './siteComponents/Welcome';
import Navbar from './siteComponents/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Welcome />
      </main>
    </div>
  );
}

export default App;
