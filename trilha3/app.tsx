import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Animal from './src/pages/Animal';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/animal/lion">Animal - Lion</Link></li>
            <li><Link to="/animal/tiger">Animal - Tiger</Link></li>
          </ul>
        </nav>

        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {}
          <Route path="/animal/:name" element={<Animal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
