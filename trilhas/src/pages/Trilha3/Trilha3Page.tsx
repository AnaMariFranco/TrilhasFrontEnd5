import { Link } from "react-router-dom";

export default function Trilha3Page() {
  return (
    <div>
      <h1>Trilha 3 - Menu de Exercícios de Roteamento</h1>
      <p>Selecione um exercício abaixo:</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "flex-start",
        }}
      >
        <Link to="/trilha3/navegacao/home">
          <button type="button">
            Exercício 1: Criando um sistema de navegação
          </button>
        </Link>

        <Link to="/trilha3/animal/tigre">
          <button type="button">
            Exercício 2: Passagem de parâmetros via URL
          </button>
        </Link>

        <Link to="/trilha3/navegacao/home">
          <button type="button">
            Exercício 3: Redirecionamento com useNavigate
          </button>
        </Link>

        <Link to="/trilha3/reservas/rooms">
          <button type="button">
            Exercício 4: Sistema de Reservas de Hotel com React Router e
            TypeScript
          </button>
        </Link>
      </div>
    </div>
  );
}
