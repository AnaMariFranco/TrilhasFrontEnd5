import { Link } from "react-router-dom";

const sampleRooms = [
  { id: "1", name: "Quarto 1", price: 150 },
  { id: "2", name: "Quarto 2", price: 250 },
  { id: "3", name: "Suíte 1", price: 500 },
];

export default function Rooms() {
  return (
    <div>
      <h2>Exercício: Reservas de Hotel - Lista</h2>
      <ul>
        {sampleRooms.map((room) => (
          <li key={room.id}>
            {room.name} - R$ {room.price.toFixed(2)}/noite
            <Link
              to={`/trilha3/reservas/room/${room.id}`}
              style={{ marginLeft: "10px" }}
            >
              Ver Detalhes
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link to="/trilha3">Voltar ao Menu da Trilha 3</Link>
    </div>
  );
}
