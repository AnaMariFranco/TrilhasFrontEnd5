import Contador from "./Contador";
import ListaTarefas from "./ListaTarefas";
import Saudacao from "./Saudacao";
import ToggleVisibilidade from "./ToggleVisibilidade";

export default function Trilha2() {
  const tarefasExemplo = ["estudar React", "estudar TS"];

  return (
    <div style={{ width: "100%" }}>
      <h1>Trilha 2: Fundamentos e Exercícios</h1>
      <Contador valorInicial={5} />
      <Saudacao nomeInicial="teste" />
      <ListaTarefas tarefasIniciais={tarefasExemplo} />
      <ToggleVisibilidade texto="texto que pode ser escondido" />
    </div>
  );
}
