import { useState } from "react";

interface ToggleVisibilidadeProps {
  texto?: string;
}

export default function ToggleVisibilidade({ texto }: ToggleVisibilidadeProps) {
  const [visivel, setVisivel] = useState(false);

  const toggle = () => setVisivel(!visivel);

  return (
    <div>
      <h2>Exercício 4: Toggle Visibilidade</h2>
      <button onClick={toggle}>{visivel ? "Ocultar" : "Mostrar"}</button>
      {visivel && <p>{texto}</p>}
    </div>
  );
}
