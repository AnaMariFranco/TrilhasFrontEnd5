import { useState } from "react";

interface ContadorProps {
  valorInicial?: number;
}

export default function Contador({ valorInicial = 0 }: ContadorProps) {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div>
      <h2>Exercício 1: Contador</h2>
      <p>Valor atual: {contador}</p>
      <button onClick={incrementar}>Aumentar (+)</button>
      <button onClick={decrementar}>Diminuir (-)</button>
      <hr />
    </div>
  );
}
