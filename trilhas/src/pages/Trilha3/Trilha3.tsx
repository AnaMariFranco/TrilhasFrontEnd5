import { Link } from "react-router-dom";

export default function Trilha3() {
  return (
    <div>
      <h1>Trilha 3</h1>
      <p>Conteúdo da Trilha 3</p>
      <h2>Exercícios de Roteamento (Exemplos)</h2>
      <ul>
        <li>
          <Link to="/home">Página Home (Ex 1)</Link>
        </li>
        <li>
          <Link to="/about">Página About (Ex 1)</Link>
        </li>
        <li>
          <Link to="/contact">Página Contact (Ex 1)</Link>
        </li>
        <li>
          <Link to="/animal/tigre">Animal Tigre (Ex 2)</Link>
        </li>
        <li>
          <Link to="/animal/urso">Animal Urso (Ex 2)</Link>
        </li>
        <li>
          <Link to="/rooms">Lista de Quartos (Ex 4)</Link>
        </li>
      </ul>
    </div>
  );
}
