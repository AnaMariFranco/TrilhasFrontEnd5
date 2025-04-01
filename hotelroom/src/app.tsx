
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/pages/Home';
import Room from './src/pages/Room';
import RoomDetails from './src/pages/Roomdetalhes';
import Reserva from './src/pages/reserva';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/rooms">Rooms</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
