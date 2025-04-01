import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();


  const handleRedirect = () => {
    navigate('/about');
  };

  return (
    <div>
      <h2>Principal</h2>
      <p>Eae</p>
      <button onClick={handleRedirect}>Lê aí</button>
    </div>
  );
}

export default Home;
