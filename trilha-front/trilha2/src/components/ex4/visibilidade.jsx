import { useState } from "react";

function visibilidade({ texto }) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div style={styles.container}>
      <button onClick={() => setVisivel(!visivel)} style={styles.button}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      {visivel && <p style={styles.texto}>{texto}</p>}
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
  button: {
    fontSize: "1rem",
    padding: "5px",
    cursor: "pointer",
  },
  texto: {
    marginTop: "10px",
    fontSize: "1.2rem",
  },
};

export default visibilidade;
