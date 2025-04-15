import { useState } from "react";

// fiz com ajuda do chat gpt

interface ListaTarefasProps {
  tarefasIniciais?: string[];
}

export default function ListaTarefas({
  tarefasIniciais = [],
}: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);

  const [novaTarefa, setNovaTarefa] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNovaTarefa(event.target.value);
  };

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  return (
    <div>
      <h2>Exercício 3: Lista de Tarefas</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={handleInputChange}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
