import { Link } from "react-router-dom";

export default function BookingSuccess() {
  return (
    <div>
      <h1>Reserva Confirmada!</h1>
      <p>Sua reserva foi realizada com sucesso</p>
      <Link to="/">Voltar para a Página Inicial</Link>
      <br />
      <Link to="/rooms">Ver outros quartos</Link>
    </div>
  );
}
