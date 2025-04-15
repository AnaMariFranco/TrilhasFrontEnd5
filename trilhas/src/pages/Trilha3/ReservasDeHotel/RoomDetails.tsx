import { useParams, useNavigate } from "react-router-dom";

type RoomDetailsParams = {
  roomId: string;
};

const findRoomData = (id: string | undefined) => {
  const sampleRooms = [
    {
      id: "1",
      name: "Quarto 1",
      price: 150,
      description: "Descrição quarto 1",
    },
    {
      id: "2",
      name: "Quarto 2",
      price: 250,
      description: "Descrição quarto 2",
    },
    {
      id: "3",
      name: "Suíte 1",
      price: 500,
      description: "Descrição suíte 1",
    },
  ];
  return sampleRooms.find((room) => room.id === id);
};

export default function RoomDetails() {
  const { roomId } = useParams<RoomDetailsParams>();
  const navigate = useNavigate();

  const roomData = findRoomData(roomId);

  const handleBooking = () => {
    console.log(`Simulando reserva para o quarto ${roomId}...`);
    navigate("/trilha3/reservas/booking-success");
  };

  if (!roomData) {
    return (
      <div>
        <h1>Quarto não encontrado!</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Detalhes do Quarto: {roomData.name}</h1>
      <p>ID do Quarto: {roomId}</p>
      <p>Descrição: {roomData.description}</p>
      <p>Preço: R$ {roomData.price.toFixed(2)}/noite</p>
      <button onClick={handleBooking}>Reservar Agora</button>
    </div>
  );
}
