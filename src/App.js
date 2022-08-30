
import './App.css';
import React from 'react';
import Navbar from './components/Navbar'

import {BrowserRouter as Router} from "react-router-dom"
import Firstpage from './components/Firstpage';
import Myskills from './components/Myskills';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <Router >
      <Navbar />
      <Firstpage />
      <Myskills />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
