import './App.css';
import Nav from './components/nav';
import AboutMe from './pages/aboutme';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
