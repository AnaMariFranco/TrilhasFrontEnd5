import { useState } from "react";

function Tarefas({ tarefasIniciais }) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return; // Sem tarefa vazia
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa(""); // Limpando
  };

  return (
    <div style={styles.container}>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        style={styles.input}
        placeholder="Digite uma tarefa..."
      />
      <button onClick={adicionarTarefa} style={styles.button}>
        Adicionar
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "300px",
    margin: "20px auto",
  },
  input: {
    fontSize: "1rem",
    padding: "5px",
    width: "80%",
    marginBottom: "10px",
  },
  button: {
    fontSize: "1rem",
    padding: "5px",
    cursor: "pointer",
  },
};

export default tarefas;
