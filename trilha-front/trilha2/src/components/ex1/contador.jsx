import { useState } from "react";

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue); // guarda

  return (
    <div style={styles.container}>
      <h2>Contador Simples</h2>
      <p style={styles.count}>{count}</p>
      <button onClick={() => setCount(count - 1)} style={styles.button}>
        -
      </button>
      <button onClick={() => setCount(count + 1)} style={styles.button}>
        +
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
    width: "200px",
    margin: "20px auto",
  },
  count: {
    fontSize: "2rem",
    margin: "10px 0",
  },
  button: {
    fontSize: "1.2rem",
    margin: "5px",
    padding: "10px",
    cursor: "pointer",
  },
};

export default Counter;
