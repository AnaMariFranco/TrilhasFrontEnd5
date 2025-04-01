
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate('/reserva');
  };

  return (
    <div>
      <h1>Room Details - {id}</h1>
      <p>Details of room {id} will be here.</p>
      <button onClick={handleReserve}>Reserve</button>
    </div>
  );
};

export default RoomDetails;
