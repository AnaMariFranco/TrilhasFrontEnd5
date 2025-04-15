import React, { useState } from 'react';

interface NovoUsuario {
  name: string;
  email: string;
}

const CadastrarUser: React.FC = () => {
  const [formData, setFormData] = useState<NovoUsuario>({ name: '', email: '' });
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const cadastrarUsuario = async () => {
    setMensagem(null);
    setErro(null);

    if (!formData.name || !formData.email) {
      setErro('Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário.');
      }

      const data = await response.json();
      setMensagem(`Usuário cadastrado com sucesso! ID: ${data.id}`);
      setFormData({ name: '', email: '' });
    } catch (err) {
      setErro((err as Error).message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded bg-white mt-10">
      <h1 className="text-xl font-bold mb-4">Cadastrar Novo Usuário</h1>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nome"
        className="border p-2 w-full rounded mb-2"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 w-full rounded mb-4"
      />

      <button
        onClick={cadastrarUsuario}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        Cadastrar
      </button>

      {mensagem && <p className="text-green-600 mt-4">{mensagem}</p>}
      {erro && <p className="text-red-600 mt-4">{erro}</p>}
    </div>
  );
};

export default CadastrarUser;
