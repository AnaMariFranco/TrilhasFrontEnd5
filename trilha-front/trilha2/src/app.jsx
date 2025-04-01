import Counter from "./exercicios/ex1/contador";
import Saudacao from "./exercicios/ex2/saudacao";
import ListaTarefas from "./exercicios/ex3/tarefas";
import ToggleVisibilidade from "./exercicios/ex4/visibilidade";

function App() {
  return (
    <div>
      <h1>Trilhas da Claudia </h1>
      
      <h2>Exercício 1: Contador</h2>
      <Counter initialValue={0} />

      <h2>Exercício 2: Saudação</h2>
      <Saudacao nomeInicial="Novato" />

      <h2>Exercício 3: Lista de Tarefas</h2>
      <Tarefas tarefasIniciais={["Estudar React", "Fazer compras", "Chorar com o projeto"]} />

      <h2>Exercício 4: Controle de Visibilidade</h2>
      <ToggleVisibilidade texto="Tão secreto que nem Deus vê" />

    </div>
  );
}

export default App; 
