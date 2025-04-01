import { useState } from "react";

function Saudacao({ nomeInicial }) {
  const [nome, setNome] = useState(nomeInicial); 

  return (
    <div style={styles.container}>
      <h2>Olá, {nome}!</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "250px",
    margin: "20px auto",
  },
  input: {
    fontSize: "1rem",
    padding: "5px",
    width: "80%",
    textAlign: "center",
  },
};

export default Saudacao;
