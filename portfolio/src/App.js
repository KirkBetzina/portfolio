import React from 'react'
import './App.css';
import Nav from './components/nav';
import AboutMe from './pages/aboutme';
import Projects from './pages/projects';
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <Nav />
      <Projects />
      {/* <AboutMe /> */}
    </div>
    
  );
}

export default App;
