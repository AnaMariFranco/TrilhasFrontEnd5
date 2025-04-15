import React, { useState } from "react";
import "./contaform.css";

const ContaForm: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nome: ${nome}, Email: ${email}`);
    setNome("");
    setEmail("");
  };

  return (
    <form className="conta-form" onSubmit={handleSubmit}>
      <h2>Formulário de Contato</h2>

      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContaForm;
