import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleNavigateToAbout = () => {
    navigate("/trilha3/navegacao/about");
  };

  return (
    <div>
      <h2>Exercício: Navegação Básica</h2>
      <p>Esta é a página inicial do exercício de navegação.</p>

      <button onClick={handleNavigateToAbout}>
        Ir para Sobre (exercício 3 useNavigate)
      </button>
      <br />
      <Link to="/trilha3/navegacao/contact">Ir para Contato (Link)</Link>

      <hr />
      <h4>Sub-Exercício: Parâmetros (Animais)</h4>
      <p>(Estes links agora apontam para o exercício de Animal separado)</p>
      <ul>
        <li>
          <Link to="/trilha3/animal/cachorro">Ver Cachorro</Link>
        </li>
        <li>
          <Link to="/trilha3/animal/gato">Ver Gato</Link>
        </li>
      </ul>
      <hr />
      <Link to="/trilha3">Voltar ao Menu da Trilha 3</Link>
    </div>
  );
}
