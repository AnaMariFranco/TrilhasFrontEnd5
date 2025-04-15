import { useState } from "react";

interface SaudacaoProps {
  nomeInicial?: string;
}

export default function Saudacao({ nomeInicial }: SaudacaoProps) {
  const [nome, setNome] = useState(nomeInicial);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <h2>Exercício 2: Saudação</h2>
      <p>Olá, {nome}!</p>
      <input
        type="text"
        value={nome}
        onChange={handleInputChange}
        placeholder="Digite um nome"
      />
      <hr />
    </div>
  );
}
