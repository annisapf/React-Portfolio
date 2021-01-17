
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './font-awesome/css/font-awesome.css';
import './icons/css/ionicons.css';


import Container from './components/Container/Container'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (


    <Router>
      <div>

        <Navbar />
        <Container />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Project} />
        <Route exact path="/contact" component={Contact} />

        <Footer />
      </div>
    </Router>

  );
}

export default App;
