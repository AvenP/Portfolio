import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <div className="container mt-5">
        <Routes>
        <Route path="/Portfolio/" element={<About />} />
        <Route path="/Portfolio/about" element={<About />} />
        <Route path="/Portfolio/portfolio" element={<Portfolio />} />
        <Route path="/Portfolio/contact" element={<Contact />} />
        <Route path="/Portfolio/resume" element={<Resume />} />
        </Routes>
    </div>
    <Footer />
      </Router>
    </div>
  );
}
// Render the Footer component
export default App;
  
