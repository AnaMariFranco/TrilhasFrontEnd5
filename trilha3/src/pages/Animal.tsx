import React from 'react';
import { useParams } from 'react-router-dom';

const Animal: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h2>Animal Page</h2>
      <p>O nome do animal é: {name}</p>
    </div>
  );
}

export default Animal;
